//function reverse
function reverseString(str){

    //1. Convert the input into characters
    let characters = str.split("");

    //variable to store the reverseString
    let reversedString ="";

   //2. Loop through characters in reverse direction
   for(let i = characters.length -1; i >= 0; i--){
//3. Concatenate the characters
    reversedString = reversedString + characters[i];
   }
    // 4. Print the new string
    console.log("Reversed String: ", reversedString);
  
   return reversedString;
}

//Function isPalindrome
function isPalindrome(string){
    //reverse the input string
    let reverse = reverseString(string);
//1.Check if original and reverse strings are the same
    if(string === reverse){
        return true; //Return true if same
    }else return false; // Return false if not same.
}


//TestData
let string1 = "madam";
let string2 = "hello";
let string3 = "level";
let string4 = "window";

//Printing result
console.log("Is ", string1, "a Palindrome?", isPalindrome(string1));
console.log("Is ", string2, "a Palindrome?", isPalindrome(string2));
console.log("Is ", string3, "a Palindrome?", isPalindrome(string3));
console.log("Is ", string4, "a Palindrome?", isPalindrome(string4));

