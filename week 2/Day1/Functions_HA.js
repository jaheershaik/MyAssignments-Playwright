//Task 1: Function Declaration
function userProfile(name){
    console.log(`Hello, ${name}!`)
}

userProfile("Jaheer");


//Task 2: Arrow Function
const double = (number) =>{
    return number*2;
}

console.log(double(8));

//task 3: Anonymous Function
setTimeout(function(){
    console.log('"This message is delayed by 2 seconds after 2 seconds"');
}, 2000);

//Task 4: Callback Function
function getUserData(callback){
    setTimeout(function(){
        callback();
    },3000);
}

getUserData(function(){
    console.log("Call back Function");
});

