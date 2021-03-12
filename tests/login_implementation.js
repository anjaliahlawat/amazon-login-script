"use strict";

var assert = require("assert");


// --------------------------
// Gauge step implementations
// --------------------------

step("The required username is <user>", function(username, user)){
  assert.equal(username, user);
}

step("The length of <username> is <number>", function(number)){
  assert.strictEqual(number, 10)
}


step("Valid username.", function(username) {  
   assert.ok(username.length >= 10)

   if(/^\d+$/.test(username)){
     assert.ok(username.length === 10) 
     assert.match(username, /^[0-9]+$/);
   }
   else{
     assert.ok(validateEmail(username))
   }
});

//check if password is atleast of 6 characters
step("Valid password.", function(password) {  
    assert.ok(password.length >= 6) 
});

//check if password is valid - a combination of alphanumeric characters
step("Valid password.", function(password) {  
  assert.match(password, /^[0-9a-zA-Z]+$/);
});

//helper functions
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}