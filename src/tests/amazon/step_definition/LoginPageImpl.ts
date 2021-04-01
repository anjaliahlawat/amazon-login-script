import * as assert from "assert";
import { Step, BeforeSpec, DataStoreFactory, DataStore } from "gauge-ts";

import AmazonLoginPage from "../pages/AmazonLoginPage";
import PageWrapper from "../../../lib/PageWrapper";
import pageType from "../../../lib/Types";

export default class LoginPageImpl {
  amazonLogin: AmazonLoginPage;

  pageWrapper: PageWrapper;

  @BeforeSpec()
  public async beforeSpec(): Promise<void> {
    const specStore: DataStore = DataStoreFactory.getSpecDataStore();
    const page: pageType = specStore.get("page");
    this.amazonLogin = new AmazonLoginPage(page);
    this.pageWrapper = new PageWrapper(page);
  }

  @Step("Open amazon login page")
  public async openAmazonPage(): Promise<void> {
    await this.amazonLogin.visitAmazonHome();
    await this.amazonLogin.signIn();
  }

  @Step("Enter username <user>")
  public async setUsername(user: string): Promise<void> {
    await this.amazonLogin.setUsername(user);
    await this.amazonLogin.clickToContinue();
  }

  @Step("Check if username <user> is visible")
  public async checkIfLabelVisible(user: string): Promise<void> {
    assert.ok(await this.pageWrapper.checkIfTextExist(user));
  }
}
