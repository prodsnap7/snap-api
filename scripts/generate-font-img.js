// disable eslint
/* eslint-disable */
const fs = require('fs');
const axios = require('axios');
const { fabric } = require('fabric');

async function getFontUrlFromGoogleFonts(googleFontUrl) {
  try {
    // Parse the font family and variants from the URL
    const urlParams = new URL(googleFontUrl);
    const familyParam = urlParams.searchParams.get('family');
    if (!familyParam) {
      throw new Error('Invalid Google Fonts URL');
    }

    // Split family and variants, handling URL-encoded spaces
    const [family] = familyParam.split(':');
    const decodedFamily = decodeURIComponent(family);

    // Construct API URL - properly encode the family name for the API request
    const apiKey = 'AIzaSyAsdPXi7m3etlD0Siq1yRdNQKmuGXoZr00';
    const encodedFamily = encodeURIComponent(decodedFamily);
    const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`;

    console.log('Fetching font information from Google Fonts API...');
    const response = await axios.get(apiUrl);

    if (!response.data.items) {
      throw new Error('Invalid response from Google Fonts API');
    }

    // Find the font in the items array
    const fontData = response.data.items.find(
      (item) => item.family.toLowerCase() === decodedFamily.toLowerCase(),
    );

    if (!fontData) {
      throw new Error(`Font "${decodedFamily}" not found in Google Fonts API`);
    }

    // Get the font files object
    const fontFiles = fontData.files;

    // Extract variant information from the URL
    const variantMatch = googleFontUrl.match(
      /wght@(\d+)(?:,italic)?|:(\d+)(?:italic)?/,
    );
    const isItalic = googleFontUrl.includes('italic');

    // Determine which variant to use
    let variantKey = 'regular';
    if (variantMatch) {
      const weight = variantMatch[1] || variantMatch[2];
      if (isItalic) {
        variantKey = weight ? `${weight}italic` : 'italic';
      } else {
        variantKey = weight;
      }
    }

    // Get the TTF URL
    let fontUrl = fontFiles[variantKey];
    if (!fontUrl) {
      fontUrl = fontFiles.regular || Object.values(fontFiles)[0];
    }

    // Convert to TTF URL if possible
    fontUrl = fontUrl.replace('woff2', 'ttf');

    console.log(`Found font URL: ${fontUrl}`);
    return fontUrl;
  } catch (error) {
    if (error.response) {
      console.error('API Response Error:', {
        status: error.response.status,
        data: error.response.data,
      });
    }
    console.error('Error fetching from Google Fonts API:', error.message);
    throw error;
  }
}

async function generateFontImage(fontFamily, variant, fontUrl) {
  try {
    console.log('Fetching actual font URL from Google Fonts...');
    const actualFontUrl = await getFontUrlFromGoogleFonts(fontUrl);
    console.log(`Actual font URL: ${actualFontUrl}`);

    const fontPath = `/tmp/${fontFamily}-${variant}.ttf`;

    console.log('Downloading font file...');
    const response = await axios({
      url: actualFontUrl,
      method: 'GET',
      responseType: 'arraybuffer',
      headers: {
        Accept: 'font/ttf,application/x-font-ttf,application/x-font-truetype',
      },
    });

    fs.writeFileSync(fontPath, response.data);
    console.log(`Font file saved to: ${fontPath}`);

    // Parse weight and style from variant
    const weight = variant.match(/\d+/)?.[0] || '400';
    const style = variant.includes('italic') ? 'italic' : 'normal';

    console.log(`Registering font with weight: ${weight}, style: ${style}`);

    fabric.nodeCanvas.registerFont(fontPath, {
      family: fontFamily,
      weight,
      style,
    });

    const fontSize = 40;
    const text =
      variant === 'regular' ? fontFamily : `${fontFamily} ${variant}`;
    const canvas = new fabric.StaticCanvas(null, {
      width: 800,
      height: 200,
    });

    const textObject = new fabric.Text(text, {
      left: 400,
      top: 100,
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: weight,
      fontStyle: style,
      fill: 'black',
    });

    canvas.add(textObject);
    textObject.center();
    canvas.renderAll();

    const pngStream = canvas.createPNGStream();

    // Cleanup
    try {
      fs.unlinkSync(fontPath);
    } catch (cleanupError) {
      console.warn('Failed to cleanup font file:', cleanupError.message);
    }

    return pngStream;
  } catch (error) {
    console.error('Font generation error:', error.message);
    console.error('Stack:', error.stack);
    throw error;
  }
}

module.exports = generateFontImage;
