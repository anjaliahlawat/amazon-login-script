const puppeteer = require("puppeteer");

module.exports = class Setup {
  constructor() {
    this.browser = "";
  }

  async createPage() {
    this.browser = await puppeteer.launch({
      timeout: process.env.PUPPETEER_TIMEOUT,
    });
    return this.browser.newPage();
  }

  async cleanUp() {
    await this.browser.close();
  }
};
