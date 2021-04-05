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

step("Open amazon login page", async () => {
  await amazonLogin.visitAmazonHome();
  await amazonLogin.signIn();
});

step("Enter amazon username", async () => {
  await amazonLogin.setUsername();
  await amazonLogin.clickToContinue();
});

step("Check if username is visible", async () => {
  console.log(await pageWrapper.getUrl());
  assert.ok(
    await pageWrapper.checkIfTextExist(`+${process.env.AMAZON_USERNAME!}`)
  );
});
