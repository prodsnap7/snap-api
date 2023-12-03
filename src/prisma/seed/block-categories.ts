import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const categories = [
    { name: 'Headlines' },
    { name: 'Features' },
    { name: 'Bullets' },
  ];

  for (const category of categories) {
    const categoryRecord = await prisma.blockCategory.create({
      data: category,
    });
    console.log(`Created category with id: ${categoryRecord.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
