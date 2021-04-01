import { Page } from "puppeteer";

import PageWrapper from "../lib/PageWrapper";
import Setup from "./Setup";

let setup: Setup;
let pageWrapper: PageWrapper;
let page: Page;

beforeSuite(async () => {
  setup = new Setup();
  page = await setup.createPage();
  gauge.dataStore.specStore.put("page", page);
});

afterSpec(async (context) => {
  const specification = context.currentSpec;
  pageWrapper = new PageWrapper(page);
  if (specification.isFailed) await pageWrapper.takeScreenShot();
});

afterSuite(async () => {
  await setup.cleanup();
});
