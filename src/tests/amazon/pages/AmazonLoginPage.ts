const dotenv = require("dotenv");

import PageWrapper from "../../../lib/PageWrapper";

dotenv.config();

export default class AmazonLoginPage {
  page: any;
  pageWrapper: any;
  constructor(page : Object) {
    this.page = page;
    this.pageWrapper = new PageWrapper(page);
  }

  async visitAmazonHome() {
    await this.page.goto(process.env.AMAZON_URL, {
      waitUntil: "networkidle0",
    });
  }

  async signIn() {
    await this.pageWrapper.clickAndWaitForNavigation("#nav-link-accountList");
  }

  async setUsername(username) {
    await this.page.type("#ap_email", username);
  }

  async setPassword() {
    await this.page.type("#ap_password", process.env.SECRET_KEY);
  }

  async clickToContinue() {
    await this.pageWrapper.clickAndWaitForNavigation("#continue");
  }

  async clickToSignIn() {
    await this.pageWrapper.clickAndWaitForNavigation("#signInSubmit");
  }
};
