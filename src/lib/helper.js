export const clickAndWaitForNavigation = async (page, id)=>{
    await Promise.all([
       this.page.waitForNavigation(),
       await page.click(id)
     ])
}

export const getUrl = async (page)=>{
    return await page.url();
 }

export const checkIfTextExist=  async (page, text)=>{
    let textArr = await page.$x(`(//*[text()="${text}"])`) 
    return textArr.length > 0
 }