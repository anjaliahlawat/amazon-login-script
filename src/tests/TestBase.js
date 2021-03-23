const puppeteer = require('puppeteer');
const { v4: uniqueId } = require('uuid');
const dotenv = require('dotenv');

dotenv.config();

module.exports = class TestBase {
  constructor(){
    this.browser = ""
  }
  async createPage(){
    this.browser = await puppeteer.launch({timeout : process.env.PUPPETEER_TIMEOUT});     
    return await this.browser.newPage();
  }  
  async cleanUp(){
    await this.browser.close();
  }

  async takeScreenShot(page){
    let name = uniqueId()
    await page.screenshot({ path: `reports/screenshots/${name}.png` });
 }
}
