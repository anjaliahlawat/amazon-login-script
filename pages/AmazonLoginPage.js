
module.exports =class AmazonLoginPage {
   constructor(page){
     this.page = page
   }

   async open(url){
      await this.page.goto(url, {
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
