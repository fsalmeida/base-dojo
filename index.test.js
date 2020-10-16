const dojo = require('./index')

test('tst should return true', () => {
    expect(dojo.tst()).toBe(true);
});

test('tst should return true again', () => {
    expect(dojo.tst()).toBe(true);
});