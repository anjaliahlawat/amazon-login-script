const dotenv = require('dotenv');

const helper = require("../../../lib/helper")
dotenv.config();

module.exports=class AmazonLoginPage {
   constructor(page){
     this.page = page
   }

   async visitAmazonHome(){
      await this.page.goto(process.env.AMAZON_URL, {
        waitUntil: "networkidle0",
      })
   }

   async signIn(){
      await helper.clickAndWaitForNavigation(this.page, "#nav-link-accountList")
   }

   async setUsername(username){
      await this.page.type("#ap_email", username)
   }

   async setPassword(){
      await this.page.type("#ap_password", process.env.SECRET_KEY)
   }

   async clickToContinue(){
      await helper.clickAndWaitForNavigation(this.page, "#continue")
   }

   async clickToSignIn(){
      await helper.clickAndWaitForNavigation(this.page, "#signInSubmit")
   }

   // async getUrl(){
   //    return await helper.getUrl(this.page);
   // }

   // async isTextVisible(text){
   //    return await helper.checkIfTextExist(this.page, text);
   // }
}
