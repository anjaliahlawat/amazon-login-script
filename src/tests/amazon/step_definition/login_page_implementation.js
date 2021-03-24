"use strict";

var assert = require("assert");

const PageWrapper = require("../../../lib/pageWrapper");
var AmazonLoginPage = require("../pages/AmazonLoginPage");

var amazonLogin = {}
var pageWrapper = {}

beforeSpec(async () => {
    let page = gauge.dataStore.specStore.get("page")
    amazonLogin = new AmazonLoginPage(page);
    pageWrapper = new PageWrapper(page)
});

step("Open amazon login page", async function() {
	await amazonLogin.visitAmazonHome();
    await amazonLogin.signIn()
});

step("Enter username <user>", async function(user) {
	await amazonLogin.setUsername(user)
    await amazonLogin.clickToContinue()
});

step("Check if username <user> is visible", async function(user) {
	assert.ok(await pageWrapper.checkIfTextExist(user))
});


