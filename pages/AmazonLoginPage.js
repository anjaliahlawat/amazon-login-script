
module.exports=class AmazonLoginPage {
   constructor(page){
     this.page = page
   }

   async openAmazonWebsite(url){
      await this.page.goto(url, {
        waitUntil: "networkidle0",
      })
   }

   async signIn(){
      this.page.click("#nav-link-accountList")
   }

   async setUsername(username){
      await this.page.type("#ap_email", username)
   }

   async setPassword(password){
      await this.page.type("#ap_password", password)
   }

   async clickToContinue(){
      await this.clickAndWaitForNavigation("#continue")
   }

   async clickToSignIn(){
      await this.clickAndWaitForNavigation("#signInSubmit")
   }

   async areUrlEqual(expectedUrl){
      let actualUrl = await this.page.url();
      return expectedUrl === actualUrl
   }

   async clickAndWaitForNavigation(id){
      await Promise.all([
         this.page.waitForNavigation(),
         await this.page.click(id)
       ])
   }
}
