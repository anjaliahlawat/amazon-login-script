const puppeteer = require('puppeteer');

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
    await page.screenshot({ path: 'reports/screenshots/example.png' });
 }
}
