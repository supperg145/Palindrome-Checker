//Thursday: Palindrome Checker
//Declare a function isPalindrome(str) that takes a string as an input.
//
//Return true if the given string is a palindrome. Otherwise, return false.
//
//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//create a function
//create an empty array for the string backwards
//replace the new string using a regular expression to strip everything aside from the alphabetical letter
//change it to lowercase to get rid of uppercase letter
//loop through the string backwards pushing it to the backwards array creating the string backwards
//join the array on "" to ensure its a string without punctuation
//compare the two string

const isPalindrome = (str) => {
    let strBackwards= []
    str = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
    console.log(str)
    for (let i = str.length - 1; i>=0 ; i--) {
        strBackwards.push(str[i])
    }
    let reversedStr = strBackwards.join('')
    console.log(reversedStr)
    return reversedStr === str ? true : false

}

console.log(isPalindrome("TaCo CaT1!"))