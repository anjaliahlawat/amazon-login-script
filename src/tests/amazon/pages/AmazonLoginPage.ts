import * as dotenv from "dotenv";
import { Page } from "puppeteer";

import PageWrapper from "../../../lib/PageWrapper";

dotenv.config();

const { AMAZON_USERNAME, AMAZON_PASSWORD, AMAZON_URL } = process.env;

export default class AmazonLoginPage {
  pageWrapper: PageWrapper;

  constructor(page: Page) {
    this.pageWrapper = new PageWrapper(page);
  }

  async visitAmazonHome(): Promise<void> {
    await this.pageWrapper.goTo(AMAZON_URL);
  }

  async signIn(): Promise<void> {
    await this.pageWrapper.clickAndWaitForNavigation("#nav-link-accountList");
  }

  async setUsername(): Promise<void> {
    await this.pageWrapper.enterText("#ap_email", AMAZON_USERNAME);
  }

  async setPassword(): Promise<void> {
    await this.pageWrapper.enterText("#ap_password", AMAZON_PASSWORD);
  }

  async clickToContinue(): Promise<void> {
    await this.pageWrapper.clickAndWaitForNavigation("#continue");
  }

  async clickToSignIn(): Promise<void> {
    await this.pageWrapper.clickAndWaitForNavigation("#signInSubmit");
  }
}
