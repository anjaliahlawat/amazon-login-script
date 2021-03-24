var Setup = require("./setup")
var setup = {}
var page = {}

beforeSuite(async () => {
        setup = new Setup();
        page = await setup.createPage();
        gauge.dataStore.specStore.put("page", page);
    })

afterSpec(async (context) => {
    var specification = context.currentSpec
    if(specification.isFailed)
        await pageWrapper.takeScreenShot()
  })

afterSuite(async (context) => {
        await setup.cleanup();
    }) 

