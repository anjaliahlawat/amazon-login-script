import * as puppeteer from "puppeteer";
import pageType from "../lib/Types";

export default class Setup {
  browser: {
    newPage;
    close: () => void;
  };

  async createPage(): Promise<pageType> {
    this.browser = await puppeteer.launch({
      timeout: +process.env.PUPPETEER_TIMEOUT,
    });
    return this.browser.newPage();
  }

  async cleanup(): Promise<void> {
    await this.browser.close();
  }
}
