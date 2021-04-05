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

step("Enter username", async () => {
  await amazonLogin.setUsername();
  await amazonLogin.clickToContinue();
});

step("Enter password", async () => {
  await amazonLogin.setPassword();
});

step("Click to sign in", async () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(process.env)) {
    console.log(key);
  }
  await amazonLogin.clickToSignIn();
});

step("Verify if final url is <url>", async (url: string) => {
  const actualUrl = await pageWrapper.getUrl();
  assert.ok(url === actualUrl);
});

step("Verify if label is visible", async () => {
  assert.ok(
    await pageWrapper.checkIfTextExist(`Hi, ${process.env.AMAZON_LABEL!}`)
  );
});
