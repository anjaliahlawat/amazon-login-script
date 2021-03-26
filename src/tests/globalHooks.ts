import {BeforeSuite, AfterSuite, AfterSpec, DataStoreFactory, DataStore} from 'gauge-ts';

import PageWrapper from "../lib/PageWrapper";
import Setup from "./setup";

export default class GlobalHooks {
  setup : any;
  page : any;
  pageWrapper : any;

  @BeforeSuite()
  public async beforeSuite(){
    this.setup = new Setup();
    this.page = await this.setup.createPage();
    const specStore: DataStore = DataStoreFactory.getSpecDataStore();
    specStore.put("page", this.page);
  }

  @AfterSpec()
  public async afterSpec(context){
    const specification = context.currentSpec;
    this.pageWrapper = new PageWrapper(this.page);
    if (specification.isFailed) await this.pageWrapper.takeScreenShot();
  }

  @AfterSuite()
  public async afterSuite(){
    await this.setup.cleanup();
  }
};
