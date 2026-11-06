interface Webdriver{


    text: string;

    getTitle(): string;


    navigate(): void;


}


interface RemoteWebDriver{

    launchBrowser(): void;
}

class Chrome implements Webdriver,RemoteWebDriver{
    launchBrowser(): void {
        console.log("Launching Chrome");
    }
    text: string = "Chrome";
    getTitle(): string {
        return "Getting the title in Chrome";
    }
    navigate(): void {
        console.log("Navigating in Chrome");
    }
    
   


}


class Firefox implements Webdriver,RemoteWebDriver{
    launchBrowser(): void {
        console.log("Launching Firefox");
    }
    text: string="Firefox";
    getTitle(): string {
        return "Getting the title in Firefox";
    }
    navigate(): void {
        console.log("Navigating in Firefox");
    }



}


const ch = new Chrome();
let title = ch.getTitle();
console.log(title);
ch.navigate();
ch.launchBrowser();


const ff = new Firefox();
let titlff = ff.getTitle();
console.log(titlff);
ff.navigate();
ff.launchBrowser();