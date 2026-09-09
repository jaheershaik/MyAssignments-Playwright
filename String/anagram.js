console.log ("***** Example 1 *********")
let s1 = "Hello World"

let words1 = s1.split(" ")
let lastWord1 = words1[words1.length-1]

let length1 = lastWord1.length;

console.log(length1)


//Example 2
console.log ("***** Example 2 *********")

let s2 = " fly me to the moon "
//trim
let trimmedString =s2.trim();
//split the string into words
let words2 = trimmedString.split(" ");
//Last word
let lastWord2 = words2[words2.length-1];

let length2 = lastWord2.length;

console.log(length2);

//Example 3

console.log ("***** Example 3 *********")
//function to check areAnagrams
function areAnagrams(str1, str2){
    //remove spaces and change to lowercase
    let string1 = str1.toLowerCase().trim();
    let string2 = str2.toLowerCase().trim();
    //sorting
    let sortedString1 = string1.split("").sort().join("");
    let sortedString2 = string2.split("").sort().join("");

    if(sortedString1 == sortedString2){
        return true;
    }else return false;

}

console.log(areAnagrams("Listen", "silent"));
console.log(areAnagrams("Hello", "world"));
