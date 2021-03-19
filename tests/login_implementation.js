"use strict";

var assert = require("assert");
const dotenv = require('dotenv');
var AmazonLoginPage = require("../pages/AmazonLoginPage");

dotenv.config();
var amazonLogin = {}

// --------------------------
// Gauge step implementations
// --------------------------

beforeSpec(async () => {
  amazonLogin = new AmazonLoginPage(gauge.dataStore.specStore.get("page"));
});

step("Open amazon website", async function(){
  await amazonLogin.openAmazonWebsite(process.env.AMAZON_URL);
  await amazonLogin.signIn()
})

step("Enter username as <user>", async function(user){
  await amazonLogin.setUsername(user)
  await amazonLogin.clickToContinue()
})

step("Enter password", async function(){
  await amazonLogin.setPassword(process.env.SECRET_KEY) 
})

step("Click to sign in", async function() {
	await amazonLogin.clickToSignIn()
})

step("Verify if final url is <url>", async function(url){
  let actualUrl = await amazonLogin.getUrl() 
  assert.ok(url === actualUrl)
})
step("Verify text <text> label is visible", async function(text) {
  assert.ok(await amazonLogin.checkIfElementExist(text))
});
