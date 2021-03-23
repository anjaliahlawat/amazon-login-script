"use strict";

var assert = require("assert");
const dotenv = require('dotenv');
const Helper = require("../../../lib/pageWrapper");
var AmazonLoginPage = require("../pages/AmazonLoginPage");

dotenv.config();
var amazonLogin = {}
var helper = {}

beforeSpec(async () => {
    amazonLogin = new AmazonLoginPage(gauge.dataStore.specStore.get("page"));
    helper = new Helper(gauge.dataStore.specStore.get("page"))
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
	assert.ok(await helper.checkIfTextExist(user))
});

afterSpec(async (context) => {
    var specification = context.currentSpec
    if(specification.isFailed)
        await helper.takeScreenShot()
})

