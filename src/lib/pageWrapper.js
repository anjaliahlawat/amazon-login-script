const { v4: uniqueId } = require('uuid');

module.exports = class Helper {
    constructor(page){
        this.page = page
    }
    async clickAndWaitForNavigation(id){
        await Promise.all([
            this.page.waitForNavigation(),
            await this.page.click(id)
        ])
    }
    async getUrl(){
        return await this.page.url();
    }
    async checkIfTextExist(text){
        let textArr = await this.page.$x(`(//*[text()="${text}"])`) 
        return textArr.length > 0
    }
    async takeScreenShot(){
        let name = uniqueId()
        await this.page.screenshot({ path: `reports/screenshots/${name}.png` });
     }
}
