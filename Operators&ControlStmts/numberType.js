// function that check the number
function numCheck(num){
    if(num > 0){
        return "Positive Number"
    } else if (num < 0){
        return "Negative Number"
    }else if (num ==0){
        return "Neutral"
    }
}

//Declare and initialize the variable
let number = -8

//Call function and Print
console.log(number+" is a "+numCheck(number))