import { Browser, launch, Page } from "puppeteer";

export default class Setup {
  browser!: Browser;

  async createPage(): Promise<Page> {
    this.browser = await launch({
      timeout: +process.env.PUPPETEER_TIMEOUT!,
    });
    return this.browser.newPage();
  }

  async cleanup(): Promise<void> {
    await this.browser.close();
  }
}
