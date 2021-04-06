import * as assert from "assert";

import AmazonLoginPage from "../pages/AmazonLoginPage";
import PageWrapper from "../../../lib/PageWrapper";

let amazonLogin: AmazonLoginPage;
let pageWrapper: PageWrapper;

const { AMAZON_USERNAME } = process.env;

beforeSpec(async () => {
  const page = gauge.dataStore.specStore.get("page");
  amazonLogin = new AmazonLoginPage(page);
  pageWrapper = new PageWrapper(page);
});

step("Open amazon login page", async () => {
  await amazonLogin.visitAmazonHome();
  await amazonLogin.signIn();
});

step("Enter username", async () => {
  await amazonLogin.setUsername();
});

step("Enter password", async () => {
  await amazonLogin.setPassword();
});

step("Click on continue button", async () => {
  await amazonLogin.clickToContinue();
});

step("Click to sign in", async () => {
  await amazonLogin.clickToSignIn();
});

step("Wait for Approval in case of security check", async () => {
  const notificationText = "To continue, approve the notification sent to:";
  const isApproveNotificationVisible = await pageWrapper.isElementPresentByText(
    notificationText,
    2000
  );
  if (isApproveNotificationVisible) {
    console.log("Please approve the login");
    // Request should be accepted within 2 mins
    await pageWrapper.waitForElementToDisappearByText(notificationText, 120000);
    await pageWrapper.waitForElementToBeVisibleByText("Amazon Pay");
  } else {
    console.log("Not asking for 2 step verification");
  }
});

step("Ensure entered user name is visible", async () => {
  assert.ok(
    await pageWrapper.isElementPresentByText(`+91${AMAZON_USERNAME}`),
    `"${AMAZON_USERNAME}" user name is not visible`
  );
});
