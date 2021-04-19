import { Page } from "puppeteer";
import { basename } from "path";

import PageWrapper from "../lib/PageWrapper";
import Setup from "./Setup";

let setup: Setup;
let pageWrapper: PageWrapper;
let page: Page;

beforeSuite(async () => {
  console.log("--->", process.env.gauge_screenshots_dir);
  setup = new Setup();
  page = await setup.createPage();
  gauge.dataStore.specStore.put("page", page);
  pageWrapper = new PageWrapper(page);
});

afterSuite(async () => {
  await setup.cleanup();
});

// Custom screenshot config
gauge.customScreenshotWriter = async () => {
  return basename(await pageWrapper.takeScreenShot());
};
