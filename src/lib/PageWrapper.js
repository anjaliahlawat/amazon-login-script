const { v4: uniqueId } = require("uuid");

module.exports = class PageWrapper {
  constructor(page) {
    this.page = page;
  }

  async clickAndWaitForNavigation(id) {
    await Promise.all([
      this.page.waitForNavigation(),
      await this.page.click(id),
    ]);
  }

  getUrl() {
    return this.page.url();
  }

  async checkIfTextExist(text) {
    const textArr = await this.page.$x(`(//*[text()="${text}"])`);
    return textArr.length > 0;
  }

  async takeScreenShot() {
    const name = uniqueId();
    await this.page.screenshot({ path: `reports/screenshots/${name}.png` });
  }
};
