"use strict";

var assert = require("assert");
const dotenv = require('dotenv');

// import AmazonLoginPage from '../pages/AmazonLoginPage'
// import TestBase from "./TestBase"

const TestBase = require("./TestBase")
const AmazonLoginPage = require("../pages/AmazonLoginPage")

dotenv.config();

// --------------------------
// Gauge step implementations
// --------------------------

step("Open the amazon account of <user>", async function(user){
  let test = new TestBase();
  let page = await test.createPage();
  let amazonLogin = new AmazonLoginPage(page);

  await amazonLogin.open();

  await amazonLogin.setUsername("9654081639")
  await amazonLogin.clickToContinue()
  
  await amazonLogin.setPassword(process.env.SECRET_KEY)
  await amazonLogin.clickToSignIn()
  
  await amazonLogin.takeScreenShot();
  assert.ok(await amazonLogin.areUrlEqual())

  await test.cleanup()
})

