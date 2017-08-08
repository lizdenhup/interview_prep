// given a string of parenthesis return a boolean 'true' if the 
// string contains valid sets of parenthesis or 'false' if it does
// not. You should only traverse the string array once to solve this. 
// input examples with their corresponding return values:
// '{[]]}' => false
// '}[()' => false
// '{[()]}' => true
// '()' => true 

const parentheses = {
    '{': '}',
    '[': ']',
    '(': ')'
}


function parenthesisChecker(string) {
    if (!string || string.length % 2 !== 0) {
        console.log('Either there is no string or the string length is not a multiple of two so it cannot be valid')
        return false; 
    } else {
        let charArr = [...string] // turns string into array of char strings 
        for (var i = 0; j = charArr.length; i < j) {
            if (charArr[i] === Object.keys(parentheses)) {
                continue 
            } else if (charArr[i] === Object.values(parentheses)) {
                // check if the preceding char is a key for the value
            }
        }
    }
// pseudocode: iterate through the string as if it is an array of characters
// stop traversing the string when you get to the first char which is a closing parentheses
// if the char prior to the closing parenthesis is a key for that value, pop it off the array
// proceed to the following char and repeat the above 
}