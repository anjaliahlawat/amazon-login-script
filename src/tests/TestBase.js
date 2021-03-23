const puppeteer = require('puppeteer');
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
  async cleanup(){
    await this.browser.close();
  }
}
