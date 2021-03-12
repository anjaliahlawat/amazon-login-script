
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
      await this.navigate("#continue")
   }

   async clickToSignIn(){
      await this.navigate("#signInSubmit")
   }

   async areUrlEqual(expectedUrl){
      let actualUrl = await this.page.url();
      return expectedUrl === actualUrl
   }

   async navigate(id){
      await Promise.all([
         this.page.waitForNavigation(),
         await this.page.click(id)
       ])
   }
}
