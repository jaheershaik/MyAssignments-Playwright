class BasePage{
    
    findElement(){
        console.log(`findElement implementation`);
    }
    clickElement(){
        console.log(`clickElement implementation`)
    }
    enterText(){
        console.log('enterText implementation')
    }
    performCommonTask(){
        console.log('perform common task implementation from BasePage class')
    }
}

class LoginPage extends BasePage{

    // overriding the method different implementation
    override performCommonTask(): void {
        //LoginPage's own implementation
        console.log(`perform common task implementation from LoginPage class`)
    }
}

//create a object for parent class
const basePage = new BasePage();
basePage.clickElement();
basePage.enterText();
basePage.performCommonTask();// output will be from base class implementation
basePage.findElement();

console.log(" -------- ")
//create a object for child class
const loginPage = new LoginPage();
loginPage.clickElement();
loginPage.enterText();
loginPage.findElement();
loginPage.performCommonTask(); // output will be from overrided implementation