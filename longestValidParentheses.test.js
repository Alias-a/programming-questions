const longestValidParentheses = require('./longestValidParentheses');

test('(() is 2', () => {
    let string = "(()"
    expect(longestValidParentheses(string)).toBe(2);
});

test('"" is 0', () => {
    let string = ""
    expect(longestValidParentheses(string)).toBe(0);
});

test('")()())" is 4', () => {
    let string = ")()())"
    expect(longestValidParentheses(string)).toBe(4);
});

test('()()()()()((((((((( is 2', () => {
    let string = "()()()()()((((((((("
    expect(longestValidParentheses(string)).toBe(10);
});

test(')))))((())))()()()((((((()))) is 8', () => {
    let string = ")))))((())))()()()((((((())))"
    expect(longestValidParentheses(string)).toBe(8);
});

test(')((()))()()(()())( is 16', () => {
    let string = ")((()))()()(()())("
    expect(longestValidParentheses(string)).toBe(16);
});

