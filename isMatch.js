/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
    // look at p as the segments between *s, if you can find the segments somewhere in the string

    // just use regex, convert the pattern to a regex expression and search the string for it, if the index is 0
    // return valid
    // else return false;

    let regexString = '';
    for(let i=0; i < p.length; i++) {
        let char = p.charAt(i);
        if (char === '*') {
            regexString = regexString.concat(".*")
        } else if (char === '?') {
            regexString = regexString.concat(".")
        } else {
            regexString = regexString.concat(char)
        }
    }


    const regex = new RegExp(regexString);
    const match = regex.exec(s);
    return match != null && regex.exec(s)[0] === s;
};

const isMatch2 = function(s, p) {
    const subPatterns = p.split("*");
    let isMatch = true, spotInString = 0;
    subPatterns.forEach((subPattern) => {
        const foundIndex = s.indexOf(subPattern);
        if (foundIndex === -1 || foundIndex < spotInString) {
            isMatch = false;
        }
        spotInString += subPattern.length;
    });
    return isMatch;
};

module.exports = isMatch;