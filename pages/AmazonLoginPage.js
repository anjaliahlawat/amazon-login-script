
module.exports =class AmazonLoginPage {
   constructor(page){
     this.page = page
   }

   async open(){
      await this.page.goto('https://www.amazon.in/ap/signin?ie=UTF8&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fyour-account%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&switch_account=signin&ignoreAuthState=1&disableLoginPrepopulate=1&ref_=ap_sw_aa', {
        waitUntil: "domcontentloaded",
      });
   }

   async setUsername(username){
      await this.page.type("#ap_email", username)
   }

   async setPassword(password){
      await this.page.type("#ap_password", password)
   }

   async clickToContinue(){
      await Promise.all([
        this.page.waitForNavigation(),
        await this.page.click("#continue")
      ]) 
   }

   async clickToSignIn(){
      await Promise.all([
        this.page.waitForNavigation(),
        await this.page.click("#signInSubmit")
      ])
   }

   async areUrlEqual(){
      let expectedUrl = "https://www.amazon.in/your-account?ref_=nav_signin&";
      let actualUrl = await this.page.url();

      return true ? expectedUrl === actualUrl : false
   }

   async takeScreenShot(){
      await this.page.screenshot({ path: 'example.png' });
   }
}
