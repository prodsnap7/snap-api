const fs = require('fs');
const axios = require('axios');
const { fabric } = require('fabric');
const { createCanvas, registerFont } = require('canvas');

async function generateFontImage(fontFamily, variant, fontUrl) {
    // Download and register the font
    const fontPath = __dirname + `/tmp/${fontFamily}-${variant}.ttf`;
    const writer = fs.createWriteStream(fontPath);
    const response = await axios({
        url: fontUrl,
        method: 'GET',
        responseType: 'stream',
    });
    response.data.pipe(writer);
    await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });

    console.log(`Downloaded font for ${fontFamily} variant ${variant}`);

    console.log("registering font at ", fontPath)
    fabric.nodeCanvas.registerFont(fontPath, { family: fontFamily, weight: variant });
    // registerFont(fontPath, { family: fontFamily, weight: variant });

    // const nodeCanvas = createCanvas(200, 200);

    // const canvas = new

    const fontSize = 40; // Adjust font size if necessary
    const text = variant === 'regular' ? fontFamily : `${fontFamily} ${variant}`;

    const textObject = new fabric.Text(text, {
        left: 10,
        top: 10,
        fontFamily: fontFamily,
        fontWeight: variant === 'regular' ? 'normal' : variant,
        fontSize: fontSize,
        fill: 'black'
    });
    // Calculate the bounding box of the text
    textObject.setCoords();
    const boundingRect = textObject.getBoundingRect();

    // Create a Fabric.js canvas
    const canvas = new fabric.StaticCanvas(null, { width: boundingRect.width, height: boundingRect.height });

    canvas.add(textObject);
    textObject.center();
    canvas.renderAll();


    return canvas.createPNGStream();
    // Export canvas as SVG
    // const svg = canvas.toSVG();

    // console.log(`Generated SVG image for ${fontFamily} variant ${variant}`);

    // // Convert SVG string to Buffer
    // const svgBuffer = Buffer.from(svg, 'utf-8');
    // Optionally, remove the font file after using it
    fs.unlinkSync(fontPath);

    return svgBuffer;
}

module.exports = generateFontImage;

