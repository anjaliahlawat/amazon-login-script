import { Page } from "puppeteer";
import { v4 as uniqueId } from "uuid";

export default class PageWrapper {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickAndWaitForNavigation(id: string): Promise<void> {
    await Promise.all([
      this.page.waitForNavigation(),
      await this.page.click(id),
    ]);
  }

  getUrl(): string {
    return this.page.url();
  }

  async checkIfTextExist(text: string): Promise<boolean> {
    const textArr = await this.page.$x(`(//*[text()="${text}"])`);
    return textArr.length > 0;
  }

  async takeScreenShot(): Promise<void> {
    const name = uniqueId();
    await this.page.screenshot({
      path: `reports/html-report/images/${name}.png`,
    });
  }
}
