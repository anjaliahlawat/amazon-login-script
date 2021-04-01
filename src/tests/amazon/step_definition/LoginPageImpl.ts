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

step("Enter username <user>", async (user: string) => {
  await amazonLogin.setUsername(user);
  await amazonLogin.clickToContinue();
});

step("Check if username <user> is visible", async (user: string) => {
  assert.ok(await pageWrapper.checkIfTextExist(user));
});
