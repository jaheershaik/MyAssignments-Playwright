//part 1 - interface
interface PageRules{
    verifyPage():void
}

//part 2 - Abstraction
abstract class BasePageIA{

    waitForPageLoad():void{
        console.log('Waiting for page to load')
    }

    getPageTitle():void{
        console.log('Getting page title')
    }
}

// Part 3- Loginpage class
class LoginPageIA extends BasePageIA implements PageRules {
    // interface method verifyPage Implementation is must
    verifyPage(): void {
        console.log('Login Page Verified')
    }

    enterUsername():void{
        console.log('Username Entered')
    }
    enterPassword(): void{
        console.log('Password Entered');  
    }
    clickLogin(): void{
        console.log('Login Button Clicked')
    }

}

// part 4 - Product Page class
class ProductPageIA extends BasePageIA implements PageRules{
    // interface method verifyPage Implementation is must
    verifyPage(): void {
        console.log('Product Page Verified')
    }

    searchProduct():void{
        console.log('Search Product')
    }
    addToCart(): void{
        console.log('Added to Cart')
    }
}

//part 5 - Execution
//create a object for LoginPageIA
const lp = new LoginPageIA();

lp.waitForPageLoad();// Waiting for Page to Load
lp.verifyPage(); // Login Page Verified
lp.enterUsername();// Username Entered
lp.enterPassword();// Password Entered
lp.clickLogin();// Login Button Clicked
lp.getPageTitle();// Getting page title