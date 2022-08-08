const romanToInt = require('./findMedianSortedArrays');

test('[1,3], [2] is 2', () => {
    expect(romanToInt([1,3], [2])).toBe(2);
});

test('[], [2] is 2', () => {
    expect(romanToInt([1,3], [2])).toBe(2);
});

test('[2], [] is 2', () => {
    expect(romanToInt([1,3], [2])).toBe(2);
});

test('[1,2], [3,4] is 2.5', () => {
    expect(romanToInt([1,2], [3,4])).toBe(2.5);
});

test('[-100,2], [100,4] is 2.5', () => {
    expect(romanToInt([-100,2], [100,4])).toBe(3);
});

test('[-.1,.2], [.4,.3] is .25', () => {
    expect(romanToInt([-.1,.2], [.4,.3])).toBe(.25);
});

test('[-.2,-.1], [-.3,.4] is .25', () => {
    expect(romanToInt([-.2,-.1], [-.3,.4])).toBe(-.15);
});
