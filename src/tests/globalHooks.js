var Setup = require("./Setup")
var setup = {}
var page = {}

beforeSuite(async function(){
    setup = new Setup();
    page = await setup.createPage();
    gauge.dataStore.specStore.put("page", page)
})

afterSpec(async (context) => {
    var specification = context.currentSpec
    if(specification.isFailed)
        await pageWrapper.takeScreenShot()
  })

afterSuite(async function (context) {
    await setup.cleanup()
}) 
