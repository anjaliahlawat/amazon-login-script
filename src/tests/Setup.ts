import * as puppeteer from "puppeteer";

export default class Setup {
  browser!: puppeteer.Browser;

  async createPage(): Promise<puppeteer.Page> {
    this.browser = await puppeteer.launch({
      timeout: +process.env.PUPPETEER_TIMEOUT!,
    });
    return this.browser.newPage();
  }

  async cleanup(): Promise<void> {
    await this.browser.close();
  }
}
