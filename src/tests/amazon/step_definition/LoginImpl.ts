import * as assert from "assert";

import AmazonLoginPage from "../pages/AmazonLoginPage";
import PageWrapper from "../../../lib/PageWrapper";

let amazonLogin: AmazonLoginPage;
let pageWrapper: PageWrapper;

beforeSpec(async () => {
  const page = gauge.dataStore.specStore.get("page");
  amazonLogin = new AmazonLoginPage(page);
  pageWrapper = new PageWrapper(page);
});

step("Open amazon website", async () => {
  await amazonLogin.visitAmazonHome();
  await amazonLogin.signIn();
});

step("Enter username as <user>", async (user) => {
  await amazonLogin.setUsername(user);
  await amazonLogin.clickToContinue();
});

step("Enter password", async () => {
  await amazonLogin.setPassword();
});

step("Enter password", async () => {
  await amazonLogin.setPassword();
});

step("Click to sign in", async () => {
  await amazonLogin.clickToSignIn();
});

step("Verify if final url is <url>", async (url) => {
  const actualUrl = await pageWrapper.getUrl();
  assert.ok(url === actualUrl);
});

step("Verify text <text> label is visible", async (text) => {
  assert.ok(await pageWrapper.checkIfTextExist(text));
});
