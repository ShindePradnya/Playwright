/*

If a class is marked as Abstract then you cannot instansiate that class, you cannot
create an object of that class

If a method is marked as Abstract then all child classes must define that method

*/



//OOPS - Inheritance
abstract class WebDriver{

    url: string;

    constructor(url: string){

        this.url = url;
    }


    navigate(): void{


        console.log(`Navigated to : ${this.url}`);
    }

    abstract launchBrowser(): void;

}


class ChromeDriver extends WebDriver{
    launchBrowser(): void {
        console.log("Launching chrome browser");
    }

    // launchBrowser(): void{
    //     console.log("Launching chrome browser");
    // }

}


class FirefoxDriver extends WebDriver{
    launchBrowser(): void {
        console.log("Launching Firefox browser");
    }

    // launchBrowser(): void{
    //     console.log("Launching Firefox browser");
    // }

}



const chrome = new ChromeDriver("http://way2automation.com");
chrome.launchBrowser();
chrome.navigate();


const firefox = new FirefoxDriver("http://google.com");
firefox.launchBrowser();
firefox.navigate();

