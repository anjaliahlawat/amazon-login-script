const assert = require("assert");
import {Step, BeforeSpec, DataStoreFactory, DataStore} from 'gauge-ts';

import AmazonLoginPage from "../pages/AmazonLoginPage";
import PageWrapper from "../../../lib/PageWrapper";

export default class LoginPageImpl {
  amazonLogin : any;
  pageWrapper : any;

  @BeforeSpec()
  public async beforeSpec() {
    const specStore: DataStore = DataStoreFactory.getSpecDataStore();
    const page = specStore.get("page") as object;
    this.amazonLogin = new AmazonLoginPage(page);
    this.pageWrapper = new PageWrapper(page);
  }

  @Step("Open amazon login page")
  public async openAmazonPage() {
    await this.amazonLogin.visitAmazonHome();
    await this.amazonLogin.signIn();
  }

  @Step("Enter username <user>")
  public async setUsername(user: string) {
    await this.amazonLogin.setUsername(user);
    await this.amazonLogin.clickToContinue();
  }

  @Step("Check if username <user> is visible")
  public async checkIfLabelVisible(user) {
    assert.ok(await this.pageWrapper.checkIfTextExist(user));
  }

};
