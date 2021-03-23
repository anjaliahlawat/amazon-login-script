const dotenv = require('dotenv');

const Helper = require("../../../lib/pageWrapper")
dotenv.config();

module.exports=class AmazonLoginPage extends Helper{
   constructor(page){
     super(page)
     this.page = page
   }

   async visitAmazonHome(){
      await this.page.goto(process.env.AMAZON_URL, {
        waitUntil: "networkidle0",
      })
   }

   async signIn(){
      await this.clickAndWaitForNavigation("#nav-link-accountList")
   }

   async setUsername(username){
      await this.page.type("#ap_email", username)
   }

   async setPassword(){
      await this.page.type("#ap_password", process.env.SECRET_KEY)
   }

   async clickToContinue(){
      await this.clickAndWaitForNavigation("#continue")
   }

   async clickToSignIn(){
      await this.clickAndWaitForNavigation("#signInSubmit")
   }
}
