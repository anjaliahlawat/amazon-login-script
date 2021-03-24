const assert = require("assert");

const PageWrapper = require("../../../lib/pageWrapper");
const AmazonLoginPage = require("../pages/AmazonLoginPage");

let amazonLogin = {};
let pageWrapper = {};

beforeSpec(async () => {
  const page = gauge.dataStore.specStore.get("page");
  amazonLogin = new AmazonLoginPage(page);
  pageWrapper = new PageWrapper(page);
});

step("Open amazon login page", async () => {
  await amazonLogin.visitAmazonHome();
  await amazonLogin.signIn();
});

step("Enter username <user>", async (user) => {
  await amazonLogin.setUsername(user);
  await amazonLogin.clickToContinue();
});

step("Check if username <user> is visible", async (user) => {
  assert.ok(await pageWrapper.checkIfTextExist(user));
});
