var TestBase = require("./TestBase")
var test = {}
var page = {}

beforeSpec(async function () { 
    test = new TestBase();
    page = await test.createPage();
    gauge.dataStore.specStore.put("page", page)
})

afterSpec(async function () {
    await test.takeScreenShot(page);
    await test.cleanup()
}) 

