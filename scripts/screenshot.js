// disable eslint
/* eslint-disable */
const {
  screenshotElement,
} = require('../dist/lib/utils/scrapingbee-screenshot');
const { config } = require('dotenv');

config();

const url =
  process.env.BASE_APP_URL + '/preview/a01a2ee6-6b35-4899-ab18-2447bc73246c';
const selector = '#preview-canvas';

screenshotElement(url, selector).then(() => {
  process.exit(0);
});
