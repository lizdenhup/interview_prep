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

var isValid = function(s) {
    if (!s.length || s.length % 2 !== 0) {
        console.log('Either there is no string or the string length is not a multiple of two so it cannot be valid')
        return false; 
    } else {
        let charArr = [...s] // turns string into array of char strings 
        for (var i = 0; j = charArr.length; i < j) {
            if (parentheses.hasOwnProperty(charArr[i])) {
                //check to see if char at index i is a key, if so keep going 
                continue 
            } else {
                // check if the preceding char is a key for the value
                if (parentheses.hasOwnProperty(charArr[i - 1]) && parentheses[charArr[i -1]] === charArr[i]) {
                    charArr = charArr.splice(0, i - 1).concat(charArr.splice(i + 1)) 
                    return true 
                }
            }
        }
    }
};

//currently passing 2/73 test cases on leetcode before timing out