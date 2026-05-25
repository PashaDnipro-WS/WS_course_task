export default class BasePage {
    async open(path){
        await browser.url('https://www.pinterest.com/${path}');
    }
}