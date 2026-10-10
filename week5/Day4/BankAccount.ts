class BankAccount{
    public accountNumber: number
    protected accountHolder: string
    private balance: number

    constructor(accountNumber: number, accountHolder: string, balance: number){
        this.accountNumber= accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }

    public deposit(amount: number): void{
        if (amount >0) {
            this.balance += amount;
            console.log('Amount Deposited successfully.')
        }else{
            console.log('Deposit amount must be positive');
        }
    }

    public withdraw(amount: number): void{
        if(amount >0 && amount < this.balance){
            this.balance -= amount
            console.log(`Withdrawl ${amount} successfully`);
        }else{
            console.log('Insufficient amount')
        }
    }

    public displayBalance():void{
        console.log(`Balance: ${this.balance}`) // private allowed inside declaring class
    }

}
// creating an object from parent class
const account = new BankAccount(101, 'Jaheer', 5000)
// Access from outside the class
console.log(account.accountNumber) // allowed because accountNumber is public, can be accessed anywhere
// console.log(account.accountHolder) // Not Allowed. Protected is allowed inside the class or inside sub class.
// console.log(account.balance) // Error- private is allowed only inside the class.

account.deposit(4000);
account.withdraw(1000);
account.displayBalance();


//child class
class SavingAccount extends BankAccount{
    
    public displayAccountDetails(): void{
        console.log(this.accountNumber) // Public property is allowed anywhere
        console.log(this.accountHolder) //  protected is allowed in its subclass.
        //console.log(this.balance) //Error - Private property is allowed only in declaring class
    }
}

const savingsAcc = new SavingAccount(201, 'basha', 10000)
savingsAcc.displayAccountDetails();
savingsAcc.withdraw(3500);
savingsAcc.displayBalance();

//Direct Access of child class properties outside the class
console.log(savingsAcc.accountNumber) // Allowed -Public
// console.log(savingsAcc.accountHolder) // protected - cannot be accessed outside the class.
// console.log(savingsAcc.balance) // Not allowed- Private can acess only in its declaring class


// Public property can be accessed anywhere like inside/outside the class and in its child class
// protected property can access only from inside its declaring class or its child class
//private property can access only inside the declaring class. can never access outside class or child class