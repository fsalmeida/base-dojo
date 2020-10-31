const { Minefield } = require('./index')

test('Dado a entrada de campo 4 por 4, espero que a line seja 4', () => {
    let minefield = new Minefield(4, 4, '*........*......');
    expect(minefield.lines).toBe(4);
});

test('Dado a entrada de campo 4 por 4, espero que a column seja 4', () => {
    let minefield = new Minefield(4, 4, '*........*......');
    expect(minefield.columns).toBe(4);
});

test('Dado a entrada *........*...... num campo 4 por 4, espero que a matrix seja construida corretamente', () => {
    let minefield = new Minefield(4, 4, '*........*......');
    expect(minefield.field[0][0]).toBe('*');
    expect(minefield.field[2][1]).toBe('*');
});

test('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [0][1] seja 1', () => {
    let minefield = new Minefield(4, 4, '*........*......');
    expect(minefield.field[0][1]).toBe('1');
});