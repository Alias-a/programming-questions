const isMatch = require('./isMatch');

test('aa, a is false', () => {
    expect(isMatch("aa", "a")).toBe(false);
});

test('aa, a* is true', () => {
    expect(isMatch("aa", "a*")).toBe(true);
});

test('axa, a?a is true', () => {
    expect(isMatch("axa", "a?a")).toBe(true);
});

test('axba, a?a is false', () => {
    expect(isMatch("axba", "a?a")).toBe(false);
});

test('ab, .*c is false', () => {
    expect(isMatch("ab", ".*c")).toBe(false);
});

test(', .* is true', () => {
    expect(isMatch("", "a*")).toBe(false);
});

test('g*g, gg is true', () => {
    expect(isMatch("gg", "g*g")).toBe(true);
});

test('complex single star match', () => {
    expect(isMatch("abcdefghggggggggabc", "abcdefghg*gabc")).toBe(true);
});

test('complex double star match', () => {
    expect(isMatch("abcdefghggggggggabc", "abc.*defghg*gabc")).toBe(false);
});

test('complex single star fail', () => {
    expect(isMatch("abcdefghggggggggabcf", "abcdefghg*gabc")).toBe(false);
});

test('complex double star fail', () => {
    expect(isMatch("abcdefghggggggggabcf", "abc.*defghg*gabc")).toBe(false);
});

test('aaa, ab*a*c*a is true', () => {
    expect(isMatch("aaa", "ab*a*c*a")).toBe(false);
});
