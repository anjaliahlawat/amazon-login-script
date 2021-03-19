
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
      await this.clickAndWaitForNavigation("#nav-link-accountList")
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

   async getUrl(){
      return await this.page.url();
   }

   async clickAndWaitForNavigation(id){
      await Promise.all([
         this.page.waitForNavigation(),
         await this.page.click(id)
       ])
   }

   async checkIfElementExist(text){
      return await this.page.$x(`(//*[text()="${text}"])`) ? true : false
   }
}
