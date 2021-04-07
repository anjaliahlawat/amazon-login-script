import * as dotenv from "dotenv";
import { Page } from "puppeteer";

import PageWrapper from "../../../lib/PageWrapper";

dotenv.config();

const { AMAZON_USERNAME, AMAZON_PASSWORD, AMAZON_URL } = process.env;

export default class AmazonLoginPage {
  page: Page;

  pageWrapper: PageWrapper;

  constructor(page: Page) {
    this.page = page;
    this.pageWrapper = new PageWrapper(page);
  }

  async visitAmazonHome(): Promise<void> {
    await this.page.goto(AMAZON_URL!, {
      waitUntil: "networkidle0",
    });
  }

  async signIn(): Promise<void> {
    await this.pageWrapper.clickAndWaitForNavigation("#nav-link-accountList");
  }

  async setUsername(): Promise<void> {
    await this.page.type("#ap_email", AMAZON_USERNAME!);
  }

  async setPassword(): Promise<void> {
    await this.page.type("#ap_password", AMAZON_PASSWORD!);
  }

  async clickToContinue(): Promise<void> {
    await this.pageWrapper.clickAndWaitForNavigation("#continue");
  }

  async clickToSignIn(): Promise<void> {
    await this.pageWrapper.clickAndWaitForNavigation("#signInSubmit");
  }
}
