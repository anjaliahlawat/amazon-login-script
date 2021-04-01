import * as assert from "assert";
import { Step, BeforeSpec, DataStoreFactory, DataStore } from "gauge-ts";
import AmazonLoginPage from "../pages/AmazonLoginPage";
import PageWrapper from "../../../lib/PageWrapper";
import pageType from "../../../lib/Types";

export default class LoginImpl {
  amazonLogin: AmazonLoginPage;

  pageWrapper: PageWrapper;

  @BeforeSpec()
  public async beforeSpec(): Promise<void> {
    const specStore: DataStore = DataStoreFactory.getSpecDataStore();
    const page: pageType = specStore.get("page");
    this.amazonLogin = new AmazonLoginPage(page);
    this.pageWrapper = new PageWrapper(page);
  }

  @Step("Open amazon website")
  public async openAmazonPage(): Promise<void> {
    await this.amazonLogin.visitAmazonHome();
    await this.amazonLogin.signIn();
  }

  @Step("Enter username as <user>")
  public async setUsername(user: string): Promise<void> {
    await this.amazonLogin.setUsername(user);
    await this.amazonLogin.clickToContinue();
  }

  @Step("Enter password")
  public async setPassword(): Promise<void> {
    await this.amazonLogin.setPassword();
  }

  @Step("Click to sign in")
  public async signIn(): Promise<void> {
    await this.amazonLogin.clickToSignIn();
  }

  @Step("Verify if final url is <url>")
  public async checkUrl(url: string): Promise<void> {
    const actualUrl = await this.pageWrapper.getUrl();
    assert.ok(url === actualUrl);
  }

  @Step("Verify text <text> label is visible")
  public async checkIfLabelVisible(text: string): Promise<void> {
    assert.ok(await this.pageWrapper.checkIfTextExist(text));
  }
}
