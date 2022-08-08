const romanToInt = require('./romanToInt');

test('I is 1', () => {
    expect(romanToInt("I")).toBe(1);
});

test('IV is 4', () => {
    expect(romanToInt("IV")).toBe(4);
});

test('IX is 9', () => {
    expect(romanToInt("IX")).toBe(9);
});

test('XL is 40', () => {
    expect(romanToInt("XL")).toBe(40);
});

test('XC is 90', () => {
    expect(romanToInt("XC")).toBe(90);
});

test('CD is 400', () => {
    expect(romanToInt("CD")).toBe(400);
});

test('CM is 900', () => {
    expect(romanToInt("CM")).toBe(900);
});

test('MMMCMXCIX is 3999', () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
});
