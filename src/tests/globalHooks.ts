import {
  BeforeSuite,
  AfterSuite,
  AfterSpec,
  DataStoreFactory,
  DataStore,
} from "gauge-ts";

import PageWrapper from "../lib/PageWrapper";
import Setup from "./setup";
import pageType from "../lib/Types";

export default class GlobalHooks {
  setup: Setup;

  page: pageType;

  pageWrapper: PageWrapper;

  @BeforeSuite()
  public async beforeSuite(): Promise<void> {
    this.setup = new Setup();
    this.page = await this.setup.createPage();
    const specStore: DataStore = DataStoreFactory.getSpecDataStore();
    specStore.put("page", this.page);
  }

  @AfterSpec()
  public async afterSpec(context: { currentSpec }): Promise<void> {
    const specification = context.currentSpec;
    this.pageWrapper = new PageWrapper(this.page);
    if (specification.isFailed) await this.pageWrapper.takeScreenShot();
  }

  @AfterSuite()
  public async afterSuite(): Promise<void> {
    await this.setup.cleanup();
  }
}
