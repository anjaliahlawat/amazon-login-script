import { Browser, launch, Page } from "puppeteer";

const { PUPPETEER_TIMEOUT, BROWSER_HEADLESS } = process.env;

export default class Setup {
  browser!: Browser;

  async createPage(): Promise<Page> {
    this.browser = await launch({
      timeout: parseInt(PUPPETEER_TIMEOUT, 10),
      headless: JSON.parse(BROWSER_HEADLESS),
    });
    return this.browser.newPage();
  }

  async cleanup(): Promise<void> {
    await this.browser.close();
  }
}
