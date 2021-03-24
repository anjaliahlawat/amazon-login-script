"use strict";

var assert = require("assert");

var AmazonLoginPage = require("../pages/AmazonLoginPage")
const PageWrapper = require("../../../lib/pageWrapper")

var amazonLogin = {}
var pageWrapper = {}

// --------------------------
// Gauge step implementations
// --------------------------

beforeSpec(async () => {
  let page = gauge.dataStore.specStore.get("page")
  amazonLogin = new AmazonLoginPage(page);
  pageWrapper = new PageWrapper(page)
})

step("Open amazon website", async function(){
  await amazonLogin.visitAmazonHome()
  await amazonLogin.signIn()
})

step("Enter username as <user>", async function(user){
  await amazonLogin.setUsername(user)
  await amazonLogin.clickToContinue()
})

step("Enter password", async function(){
  await amazonLogin.setPassword() 
})

step("Click to sign in", async function() {
	await amazonLogin.clickToSignIn()
})

step("Verify if final url is <url>", async function(url){
  let actualUrl = await pageWrapper.getUrl() 
  assert.ok(url === actualUrl)
})

step("Verify text <text> label is visible", async function(text) {
  assert.ok(await pageWrapper.checkIfTextExist(text))
})

afterSpec(async (context) => {
  var specification = context.currentSpec
  if(specification.isFailed)
      await pageWrapper.takeScreenShot()
})
