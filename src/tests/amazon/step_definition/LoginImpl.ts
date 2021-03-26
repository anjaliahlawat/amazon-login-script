const assert = require("assert");
import { Step, BeforeSpec, DataStoreFactory, DataStore } from 'gauge-ts';
import AmazonLoginPage from "../pages/AmazonLoginPage";
import PageWrapper from "../../../lib/PageWrapper";


export default class LoginImpl {
  amazonLogin: any;
  pageWrapper: any;

  @BeforeSpec()
  public async beforeSpec() {
    const specStore: DataStore = DataStoreFactory.getSpecDataStore();
    const page = specStore.get("page") as object;
    this.amazonLogin = new AmazonLoginPage(page);
    this.pageWrapper = new PageWrapper(page);
  }

  @Step("Open amazon website")
  public async openAmazonPage() {
    await this.amazonLogin.visitAmazonHome();
    await this.amazonLogin.signIn();
  }

  @Step("Enter username as <user>")
  public async setUsername(user: string) {
    await this.amazonLogin.setUsername(user);
    await this.amazonLogin.clickToContinue();
  }

  @Step("Enter password")
  public async setPassword() {
    await this.amazonLogin.setPassword();
  }

  @Step("Click to sign in")
  public async signIn() {
    await this.amazonLogin.clickToSignIn();
  }

  @Step("Verify if final url is <url>")
  public async checkUrl(url) {
    const actualUrl = await this.pageWrapper.getUrl();
    assert.ok(url === actualUrl);
  }

  @Step("Verify text <text> label is visible")
  public async checkIfLabelVisible(text) {
    assert.ok(await this.pageWrapper.checkIfTextExist(text));
  }

}
