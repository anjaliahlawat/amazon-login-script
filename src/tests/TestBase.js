const puppeteer = require('puppeteer');
const { v4: uniqueId } = require('uuid');

module.exports = class TestBase {
  constructor(){
    this.browser = ""
  }
  async createPage(){
    this.browser = await puppeteer.launch();     
    return await this.browser.newPage();
  }  
  async cleanup(){
    await this.browser.close();
  }

  async takeScreenShot(page){
    let name = uniqueId()
    await page.screenshot({ path: `reports/screenshots/${name}.png` });
 }
}
