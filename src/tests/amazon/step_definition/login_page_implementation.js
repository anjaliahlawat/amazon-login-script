"use strict";

var assert = require("assert");
const dotenv = require('dotenv');
var AmazonLoginPage = require("../pages/AmazonLoginPage");

dotenv.config();
var amazonLogin = {}

beforeSpec(async () => {
    amazonLogin = new AmazonLoginPage(gauge.dataStore.specStore.get("page"));
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
	assert.ok(await amazonLogin.isTextVisible(user))
});

