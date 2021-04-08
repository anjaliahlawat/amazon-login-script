import { Page } from "puppeteer";
import { join, resolve } from "path";

import PageWrapper from "../lib/PageWrapper";
import Setup from "./Setup";

const { SCREENSHOT_DIR } = process.env;

let setup: Setup;
let pageWrapper: PageWrapper;
let page: Page;

beforeSuite(async () => {
  setup = new Setup();
  page = await setup.createPage();
  gauge.dataStore.specStore.put("page", page);
});

afterSpec(async (context: any) => {
  const specification = context.currentSpec;
  pageWrapper = new PageWrapper(page);
  if (specification.isFailed)
    await pageWrapper.takeScreenShot(specification.isFailed);
});

afterSuite(async () => {
  await setup.cleanup();
});
