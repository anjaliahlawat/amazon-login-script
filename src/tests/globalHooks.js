var TestBase = require("./TestBase")
var test = {}
var page = {}

beforeSuite(async function(){
    test = new TestBase();
    page = await test.createPage();
    gauge.dataStore.specStore.put("page", page)
})

afterSuite(async function () {
    await test.cleanUp()
}) 

