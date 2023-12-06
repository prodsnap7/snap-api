const cluster = require('cluster');
const os = require('os');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');
const { PrismaService } = require('../dist/prisma/prisma.service');
const { CloudinaryService } = require('../dist/uploads/cloudinary.service');
const { config } = require('dotenv');
const generateFontImage = require('./generate-font-img');
const { default: axios } = require('axios');

config();

async function fetchFonts() {
    const res = await axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=' + process.env.GOOGLE_API_KEY);
    return res.data.items;
}

async function upsertDatabaseEntities(prisma, font) {
    const family = await prisma.family.upsert({
        where: { name: font.family },
        update: {},
        create: { name: font.family },
    });

    const category = await prisma.category.upsert({
        where: { name: font.category },
        update: {},
        create: { name: font.category },
    });

    const kind = await prisma.kind.upsert({
        where: { name: font.kind },
        update: {},
        create: { name: font.kind },
    });

    return { family, category, kind };
}

async function processFontVariants(cloudinary, font) {
    let fontVariants = [];
    for (let variant of font.variants) {
        const imgBuffer = await generateFontImage(font.family, variant, font.files[variant]);
        const res = await cloudinary.uploadPhotoFromStream(imgBuffer, `prodsnap-fonts/${font.family}-${variant}`);
        fontVariants.push({
            name: variant,
            imageUrl: res.url
        });
    }
    return fontVariants;
}

async function insertFont(prisma, fontData) {
    await prisma.font.create({ data: fontData });
}


if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  async function masterProcess() {
      console.log(`Master process running, forking ${numCPUs} workers...`);

      const fonts = await fetchFonts(); // Assuming fetchFonts() is available here
      const chunkSize = Math.ceil(fonts.length / numCPUs);

      for (let i = 0; i < numCPUs; i++) {
          const chunk = fonts.slice(i * chunkSize, (i + 1) * chunkSize);
          const worker = cluster.fork();
          worker.send(chunk); // Send chunk to worker
      }
  }

  masterProcess().catch(err => {
      console.error('Error in master process:', err);
  });

  cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died, forking new worker...`);
      cluster.fork();
  });
} else {
  process.on('message', async (chunk) => {
      const app = await NestFactory.createApplicationContext(AppModule);
      const prisma = app.get(PrismaService);
      const cloudinary = app.get(CloudinaryService);

      try {
          for (const font of chunk) {
              const { family, category, kind } = await upsertDatabaseEntities(prisma, font);
              const fontVariants = await processFontVariants(cloudinary, font);

              await insertFont(prisma, {
                  family: { connect: { id: family.id } },
                  category: { connect: { id: category.id } },
                  kind: { connect: { id: kind.id } },
                  subsets: font.subsets,
                  variants: { create: fontVariants },
              });
          }
      } catch (error) {
          console.error(error);
      } finally {
          await app.close();
      }
  });
}