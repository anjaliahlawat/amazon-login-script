import { Page } from "puppeteer";
import { basename } from "path";

import PageWrapper from "../lib/PageWrapper";
import Setup from "./Setup";

let setup: Setup;
let pageWrapper: PageWrapper;
let page: Page;

beforeSuite(async () => {
  setup = new Setup();
  page = await setup.createPage();
  gauge.dataStore.specStore.put("page", page);
  pageWrapper = new PageWrapper(page);
});

afterSuite(async () => {
  await setup.cleanup();
});

// Take screenshot via puppeteer and attach to HTML reports
gauge.customScreenshotWriter = async () => {
  return basename(await pageWrapper.takeScreenShot());
};
