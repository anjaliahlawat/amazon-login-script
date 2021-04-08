import { Page } from "puppeteer";
import { join, resolve } from "path";

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

afterSpec(async (context: any) => {
  const specification = context.currentSpec;
  pageWrapper = new PageWrapper(page);
  if (specification.isFailed) {
    const scrPath = "reports/html-report/images/screenshots/failed";
    await pageWrapper.takeScreenShot(scrPath);
    gauge.message(
      `<a href=${join(
        resolve("."),
        scrPath
      )}>View screenshot for failed step.</a>`
    );
  }
});

afterSuite(async () => {
  await setup.cleanup();
});
