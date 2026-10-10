class WebComponent{
    selector: string

    //constructor that initializes a selector property
    constructor(selector: string){
        this.selector = selector;
    }
    //click() method
    click(): void{
        console.log(`clicking on the web component ${this.selector}`);
    }
    // focus() method
    focus(): void{
        console.log(`Focussing on the web component ${this.selector}`)
    }

}

class Button extends WebComponent{
    //overriding the click method which derived from parent class
    override click(): void{
        super.click()// this will implement the parent click().
        console.log(`Button clicked ${this.selector}`)// additional message
    }
}

class TextInput extends WebComponent{
    value: string =""

    enterText(text: string){
        this.value = text
        console.log(`Entered test ${this.value} into ${this.selector} webcomponent`)
    }
}

function testComponents(){

    //create a button object
    const loginbtn = new Button('#LoginButton')
    
    loginbtn.focus();
    loginbtn.click();
    

    //create a TextInput object
    const usernameInput = new TextInput('#username')

     usernameInput.focus();
    usernameInput.enterText("Jaheer")
   

}

testComponents();