module.exports = helper = {
    clickAndWaitForNavigation :async (page, id)=>{
        await Promise.all([
            page.waitForNavigation(),
            await page.click(id)
        ])
    },
    getUrl : async (page)=>{
        return await page.url();
    },
    checkIfTextExist : async (page, text)=>{
        let textArr = await page.$x(`(//*[text()="${text}"])`) 
        return textArr.length > 0
    }
}
