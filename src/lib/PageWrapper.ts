import { ElementHandle, Page, WaitForSelectorOptions } from "puppeteer";
import { v4 as uniqueId } from "uuid";
import { join, resolve } from "path";
import createDir from "./pathUtils";

const isElementHandle = (
  e: ElementHandle<Element> | null
): e is ElementHandle<Element> => e !== null;

export default class PageWrapper {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private async waitForElement(
    selector: string,
    options: WaitForSelectorOptions = {}
  ): Promise<ElementHandle<Element> | null> {
    if (selector.includes("//")) {
      return this.page.waitForXPath(selector, options);
    }
    return this.page.waitForSelector(selector, options);
  }

  async waitForElementToAppear(
    selector: string,
    options: { visible?: boolean; timeout?: number } = {}
  ): Promise<ElementHandle<Element>> {
    const elementHandle = await this.waitForElement(selector, options);
    if (isElementHandle(elementHandle)) {
      return elementHandle;
    }
    throw new Error(`Element not found for selector ${selector}`);
  }

  async waitForElementToBeVisibleByText(text: string): Promise<void> {
    const selector = `//*[text()="${text}"]`;
    await this.waitForElement(selector, { visible: true });
  }

  async waitForElementToDisappearByText(
    text: string,
    timeout?: number
  ): Promise<void> {
    const selector = `//*[text()="${text}"]`;
    await this.waitForElement(selector, { hidden: true, timeout });
  }

  async isElementPresentByText(
    text: string,
    waitTimeInMilliSeconds = 500
  ): Promise<boolean> {
    const selector = `//*[text()="${text}"]`;
    try {
      await this.waitForElement(selector, {
        timeout: waitTimeInMilliSeconds,
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  async clickAndWaitForNavigation(id: string): Promise<void> {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle0" }),
      await this.page.click(id),
    ]);
  }

  getUrl(): string {
    return this.page.url();
  }

  async takeScreenShot(scrPath?: string): Promise<void> {
    const name = uniqueId();
    const screenshotDirPath =
      scrPath || "reports/html-report/images/screenshots";
    await createDir(screenshotDirPath);
    const scrFullPath = join(resolve("."), screenshotDirPath, `/${name}.png`);
    await this.page.screenshot({
      path: scrFullPath,
    });
  }
}
