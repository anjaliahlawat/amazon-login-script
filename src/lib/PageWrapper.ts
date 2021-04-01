import * as uniqueId from "uuid";
import pageType from "./Types";

export default class PageWrapper {
  page: pageType;

  constructor(page: pageType) {
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
    await this.page.screenshot({ path: `reports/screenshots/${name}.png` });
  }
}
