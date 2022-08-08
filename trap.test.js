const trap = require('./trap');

test('[0,1,0,2,1,0,1,3,2,1,2,1] is 6', () => {
    const inputColumnMap = [0,1,0,2,1,0,1,3,2,1,2,1];
    expect(trap(inputColumnMap)).toBe(6);
});

test('[4,2,3] is 1', () => {
    const inputColumnMap = [4,2,3];
    expect(trap(inputColumnMap)).toBe(1);
});

test('[3,4,4,4,1,2,3,4] is 6', () => {
    const inputColumnMap = [3,4,4,4,1,2,3,4];
    expect(trap(inputColumnMap)).toBe(6);
});
test('[4,1,4,1,4,2,3] is 7', () => {
    const inputColumnMap = [4,1,4,1,4,2,3];
    expect(trap(inputColumnMap)).toBe(7);
});

test('[4,1,4,1,4,2,3] is 7', () => {
    const inputColumnMap = [4,1,4,1,4,2,3];
    expect(trap(inputColumnMap)).toBe(7);
});

test('[0] is 0', () => {
    const inputColumnMap = [0];
    expect(trap(inputColumnMap)).toBe(0);
});

test('[3,4,3,4,2,2,1,2,1,1,0] is 2', () => {
    const inputColumnMap = [3,4,3,4,2,2,1,2,1,1,0];
    expect(trap(inputColumnMap)).toBe(2);
});
