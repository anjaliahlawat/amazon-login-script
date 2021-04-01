const PageWrapper = require("../lib/PageWrapper");
const Setup = require("./Setup");

let setup = {};
let page = {};
let pageWrapper = {};

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
  await setup.cleanUp();
});
