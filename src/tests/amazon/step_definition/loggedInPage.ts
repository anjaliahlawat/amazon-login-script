import PageWrapper from "../../../lib/PageWrapper";

let pageWrapper: PageWrapper;

const { AMAZON_LABEL } = process.env;

beforeSpec(async () => {
  const page = gauge.dataStore.specStore.get("page");
  pageWrapper = new PageWrapper(page);
});

step("Ensure user is logged in", async () => {
  await pageWrapper.waitForElementToBeVisibleByText(`Hi, ${AMAZON_LABEL}`);
});
