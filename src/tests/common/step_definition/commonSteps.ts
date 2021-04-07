import * as assert from "assert";
import PageWrapper from "../../../lib/PageWrapper";

let pageWrapper: PageWrapper;

beforeSpec(async () => {
  const page = gauge.dataStore.specStore.get("page");
  pageWrapper = new PageWrapper(page);
});

step("Wait for <text> partial text", async (text: string) => {
  const selector = `//*[contains(text(),"${text}")]`;
  await pageWrapper.waitForElementToAppear(selector);
});

step(
  "Ensure current url contains <expectedUrl>",
  async (expectedSubUrl: string) => {
    const currentUrl = await pageWrapper.getUrl();
    assert.ok(
      currentUrl.includes(expectedSubUrl),
      `Expected actual URL: ${currentUrl} to contains sub url: ${expectedSubUrl}`
    );
  }
);
