const CountIntervals = require('./CountIntervals');

test('', () => {
    let countIntervals = new CountIntervals();
    countIntervals.add(2,3);
    countIntervals.add(7,10);
    expect(countIntervals.count()).toBe(6);
    countIntervals.add(5,8);
    expect(countIntervals.count()).toBe(8);
});

test('1', () => {
    let countIntervals = new CountIntervals();
    countIntervals.add(8,43);
    countIntervals.add(13,16);
    countIntervals.add(26,33);
    countIntervals.add(28,36);
    countIntervals.add(29,37);
    expect(countIntervals.count()).toBe(36);
});
