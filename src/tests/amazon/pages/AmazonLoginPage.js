const dotenv = require("dotenv");

const PageWrapper = require("../../../lib/PageWrapper");

dotenv.config();

let pageWrapper = {};

module.exports = class AmazonLoginPage {
  constructor(page) {
    this.page = page;
    pageWrapper = new PageWrapper(page);
  }

  async visitAmazonHome() {
    await this.page.goto(process.env.AMAZON_URL, {
      waitUntil: "networkidle0",
    });
  }

  async signIn() {
    await pageWrapper.clickAndWaitForNavigation("#nav-link-accountList");
  }

  async setUsername(username) {
    await this.page.type("#ap_email", username);
  }

  async setPassword() {
    await this.page.type("#ap_password", process.env.SECRET_KEY);
  }

  async clickToContinue() {
    await pageWrapper.clickAndWaitForNavigation("#continue");
  }

  async clickToSignIn() {
    await pageWrapper.clickAndWaitForNavigation("#signInSubmit");
  }
};
