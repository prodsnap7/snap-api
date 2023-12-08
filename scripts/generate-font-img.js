const fs = require('fs');
const axios = require('axios');
const { fabric } = require('fabric');

async function generateFontImage(fontFamily, variant, fontUrl) {
  // Download and register the font
  const fontPath = `/tmp/${fontFamily}-${variant}.ttf`;
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

  // Register font
  fabric.nodeCanvas.registerFont(fontPath, {
    family: fontFamily,
    weight: variant,
  });

  // Ensure font is fully loaded
  await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for 500ms

  const fontSize = 40; // Adjust font size if necessary
  const text = variant === 'regular' ? fontFamily : `${fontFamily} ${variant}`;

  // Create a temporary text
  // object to measure size
  const tempText = new fabric.Text(text, {
    fontFamily: fontFamily,
    fontWeight: variant === 'regular' ? 'normal' : variant,
    fontSize: fontSize,
  });

  // Calculate the bounding box of the text
  tempText.setCoords();
  const boundingRect = tempText.getBoundingRect();

  // Add buffer to the dimensions to prevent clipping
  const buffer = 20; // Adjust this buffer size if necessary
  const canvasWidth = boundingRect.width + buffer;
  const canvasHeight = boundingRect.height + buffer;

  // Create a Fabric.js canvas with adjusted dimensions
  const canvas = new fabric.StaticCanvas(null, {
    width: canvasWidth,
    height: canvasHeight,
  });

  // Add the text object to the canvas
  const textObject = new fabric.Text(text, {
    left: buffer / 2,
    top: buffer / 2,
    fontFamily: fontFamily,
    fontWeight: variant === 'regular' ? 'normal' : variant,
    fontSize: fontSize,
    fill: 'black',
  });
  canvas.add(textObject);

  // Center the text object within the canvas
  textObject.center();
  canvas.renderAll();

  // Generate the PNG stream from the canvas
  const pngStream = canvas.createPNGStream();

  // Optionally, remove the font file after using it
  fs.unlinkSync(fontPath);

  return pngStream;
}

module.exports = generateFontImage;
