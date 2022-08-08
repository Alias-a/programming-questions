const firstMissingPositive = require('./firstMissingPositive');

test('[1,2,0] is 3', () => {
    expect(firstMissingPositive([1,2,0])).toBe(3);
});

test('[3,4,-1,1] is 2', () => {
    expect(firstMissingPositive([3,4,-1,1])).toBe(2);
});

test('[1,2,3,4,6] is 5', () => {
    expect(firstMissingPositive([1,2,3,4,6])).toBe(5);
});

test('[1,2,6,3,5,4] is 7', () => {
    expect(firstMissingPositive([1,2,6,3,5,4])).toBe(7);
});

test('[7,8,9,11,12] is 1', () => {
    expect(firstMissingPositive([7,8,9,11,12])).toBe(1);
});

test('[1] is 2', () => {
    expect(firstMissingPositive([1])).toBe(2);
});

test('[2,1] is 3', () => {
    expect(firstMissingPositive([2,1])).toBe(3);
});

test('[1,1000] is 2', () => {
    expect(firstMissingPositive([1,1000])).toBe(2);
});

test('[3,3,1,4,0] is 2', () => {
    expect(firstMissingPositive([3,3,1,4,0])).toBe(2);
});
