const clickAndWaitForNavigation = async (page, id)=>{
    await Promise.all([
       page.waitForNavigation(),
       await page.click(id)
     ])
}

const getUrl = async (page)=>{
    return await page.url();
 }

const checkIfTextExist=  async (page, text)=>{
    let textArr = await page.$x(`(//*[text()="${text}"])`) 
    return textArr.length > 0
 }

 module.exports = {
     clickAndWaitForNavigation : clickAndWaitForNavigation,
     getUrl : getUrl,
     checkIfTextExist : checkIfTextExist
 }