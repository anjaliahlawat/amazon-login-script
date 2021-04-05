import * as dotenv from "dotenv";
import { Page } from "puppeteer";

import PageWrapper from "../../../lib/PageWrapper";

dotenv.config();

export default class AmazonLoginPage {
  page: Page;

  pageWrapper: PageWrapper;

  constructor(page: Page) {
    this.page = page;
    this.pageWrapper = new PageWrapper(page);
  }

  async visitAmazonHome(): Promise<void> {
    await this.page.goto(process.env.AMAZON_URL!, {
      waitUntil: "networkidle0",
    });
  }

  async signIn(): Promise<void> {
    await this.pageWrapper.clickAndWaitForNavigation("#nav-link-accountList");
  }

  async setUsername(): Promise<void> {
    await this.page.type("#ap_email", process.env.AMAZON_USERNAME!);
  }

  async setPassword(): Promise<void> {
    await this.page.type("#ap_password", process.env.AMAZON_PASSWORD!);
  }

  async clickToContinue(): Promise<void> {
    await this.pageWrapper.clickAndWaitForNavigation("#continue");
  }

  async clickToSignIn(): Promise<void> {
    await this.pageWrapper.clickAndWaitForNavigation("#signInSubmit");
  }
}
