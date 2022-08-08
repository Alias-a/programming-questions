/**
 * @param {string} s
 * @return {number}
 */
let longestValidParentheses = function(s) {
    // scan string once from left and once from right
    // scanning from left find the first (
        // count after and anytime ( and ) are equal update longest valid
        // whenever ) is > number of ( reset count to 0 searching for the next ( and continue
    // repeat the opposite process from the end of string
    let maxValidLength = 0;
    let seenParans = { left: 0, right: 0 };
    for (let i = 0; i < s.length; i++) {
        let curChar = s.charAt(i);
        if (curChar === '(') seenParans.left++;
        if (curChar === ')') seenParans.right++;
        let potentialMaxValid = seenParans.left + seenParans.right;
        if (seenParans.left === seenParans.right && potentialMaxValid > maxValidLength) maxValidLength = potentialMaxValid;
        if (seenParans.right > seenParans.left) seenParans = {left: 0, right: 0};
    }

    seenParans = { left: 0, right: 0 };
    for (let i = (s.length-1); i >= 0; i--) {
        let curChar = s.charAt(i);
        if (curChar === '(') seenParans.left++;
        if (curChar === ')') seenParans.right++;
        let potentialMaxValid = seenParans.left + seenParans.right;
        if (seenParans.left === seenParans.right && potentialMaxValid > maxValidLength) maxValidLength = potentialMaxValid;
        if (seenParans.left > seenParans.right) seenParans = {left: 0, right: 0};
    }

    return maxValidLength;
};

module.exports = longestValidParentheses;