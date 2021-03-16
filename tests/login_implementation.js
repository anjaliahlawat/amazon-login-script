"use strict";

var assert = require("assert");
const dotenv = require('dotenv');
dotenv.config();

const TestBase = require("./TestBase")
const AmazonLoginPage = require("../pages/AmazonLoginPage")

let test = new TestBase();
let page = await test.createPage();
let amazonLogin = new AmazonLoginPage(page);


// --------------------------
// Gauge step implementations
// --------------------------


step("Open amazon website", async function(){
  await amazonLogin.openAmazonWebsite(process.env.AMAZON_URL);
  await amazonLogin.signIn()
})

step(["Enter <inputType> as <inputValue>", "Enter <inputType>"], async function(inputName, inputValue){
  if(inputName === 'username'){
    await amazonLogin.setUsername(inputValue)
    await amazonLogin.clickToContinue()
  }
  else if(inputName === 'password'){
    await amazonLogin.setPassword(process.env.SECRET_KEY)
    await amazonLogin.clickToSignIn()
  }
})

step("Verify if final url is <url>", async function(url){
  let actualUrl = await amazonLogin.getUrl() 
  assert.ok(url === actualUrl)
})


afterSpec(async function () {
  await test.takeScreenShot(page);
  await test.cleanup()
})
