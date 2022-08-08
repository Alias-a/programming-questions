/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
let findSubstring = function(s, words) {
    // iterate through words in words, see if we can find the current word
        // iterate through the string starting at index 0
            // see if the following word.length substring is in remaining words
            // repeat this process until remaining words is empty or there is a failure to match
                // if failure to match look for next index in remaining string that contains word and repeat process
    let indices = [];
    words.forEach((word) => {
        let wordIndex = s.indexOf(word);
        let start = wordIndex+word.length;
        while (wordIndex !== -1 && start <= s.length) {

            let remainingWords = filterFirstMatch(words, word);
            while(remainingWords.length !== 0) {
                let nextWord = s.substring(start, start+word.length);
                if (remainingWords.indexOf(nextWord) !== -1) {
                    remainingWords = filterFirstMatch(remainingWords, nextWord);
                    start += word.length;
                } else {
                    break;
                }
            }

            if (remainingWords.length === 0 && indices.indexOf(wordIndex) === -1) {
                indices.push(wordIndex);
            }

            // move one word forward and check for next word index;
            const offset = wordIndex + 1;
            const stringRemainder = s.substring(offset);
            const firstIndex = stringRemainder.indexOf(word);
            if (firstIndex === -1) break;
            wordIndex = firstIndex + offset;
            start = wordIndex + word.length;
        }
    });

    return indices;
};

function filterFirstMatch(arr, item) {
    let newArr = [], seen = false;
    for(let i = 0; i < arr.length; i++) {
        const arrayEl = arr[i];
        if (arrayEl === item && !seen) {
            seen = true;
        } else {
            newArr.push(arrayEl);
        }
    }

    return newArr;
}


module.exports = findSubstring;