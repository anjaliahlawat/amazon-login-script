var Setup = require("./setup")
var setup = {}
var page = {}

beforeSuite(async function(){
    setup = new Setup();
    page = await setup.createPage();
    gauge.dataStore.specStore.put("page", page)
})

afterSuite(async function (context) {
    await setup.cleanup()
}) 

