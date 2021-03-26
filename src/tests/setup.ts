const puppeteer = require("puppeteer");

export default class Setup {
  browser: any;
  constructor() {
    this.browser = "";
  }

  async createPage() {
    this.browser = await puppeteer.launch({
      timeout: process.env.PUPPETEER_TIMEOUT,
    });
    return this.browser.newPage();
  }

  async cleanup() {
    await this.browser.close();
  }
};
