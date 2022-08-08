const findSubstring = require('./findSubstring');

test('"barfoothefoobarman", words = ["foo","bar"] is [0,9]', () => {
    let string = "barfoothefoobarman";
    let words = ["foo","bar"];
    [0,9].forEach((result) => {
        expect(findSubstring(string, words)).toContain(result);
    });
});

test('"wordgoodgoodgoodbestword", ["word","good","best","word"] is [0,9]', () => {
    let string = "wordgoodgoodgoodbestword";
    let words = ["word","good","best","word"];
    expect(findSubstring(string, words)).toEqual([]);
});

test('s = "barfoofoobarthefoobarman", words = ["bar","foo","the"] is [6,9,12]', () => {
    let string = "barfoofoobarthefoobarman";
    let words = ["bar","foo","the"];
    [6, 9, 12].forEach((result) => {
        const actualResults = findSubstring(string, words);
        expect(actualResults).toContain(result);
    });
});

test('s = "lingmindraboofooowingdingbarrwingmonkeypoundcake", words = ["fooo","barr","wing", "ding", "wing"] is [13]', () => {
    let string = "lingmindraboofooowingdingbarrwingmonkeypoundcake";
    let words = ["fooo","barr","wing", "ding", "wing"];
    [13].forEach((result) => {
        expect(findSubstring(string, words)).toContain(result);
    });
});

test('s = "wordgoodgoodgoodbestword", words = ["word","good","best","good"] is [8]', () => {
    let string = "wordgoodgoodgoodbestword";
    let words = ["word","good","best","good"];
    expect(findSubstring(string, words)).toEqual([8]);
});

test('2', () => {
    let string = "a";
    let words = ["a"];
    expect(findSubstring(string, words)).toEqual([0]);
});

test('1', () => {
    let string = "aaaaaaaaaaaaaa";
    let words = ["aa", "aa"];
    expect(findSubstring(string, words)).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
});

test('3', () => {
    let string = "aaa";
    let words = ["a", "b"];
    expect(findSubstring(string, words)).toEqual([]);
});
