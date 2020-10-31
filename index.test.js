const { Minefield } = require('./index')

describe('Testes relativos aos campos simples de um campo de 4 por 4', () => {
    let minefield = null;
    beforeEach(() => {
        minefield = new Minefield(4, 4, '*........*......');
    });

    test('O número de linhas deve ser 4', () => {
        expect(minefield.lines).toBe(4);
    });

    test('O número de colunas deve ser 4', () => {
        expect(minefield.columns).toBe(4);
    });

    test('As bombas devem ser posicionadas em [0,0] e [2,1]', () => {
        expect(minefield.field[0][0]).toBe('*');
        expect(minefield.field[2][1]).toBe('*');
    });
});

describe('Testes relativos a identificação do número de bombas ao retor de cada elemento do campo', () => {
    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [0][1] seja 1', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[0][1]).toBe(1);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [0][2] seja 0', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[0][2]).toBe(0);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [0][3] seja 0', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[0][3]).toBe(0);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [1][0] seja 2', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[1][0]).toBe(2);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [1][1] seja 2', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[1][1]).toBe(2);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [1][2] seja 1', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[1][2]).toBe(1);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [1][3] seja 0', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[1][3]).toBe(0);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [2][0] seja 1', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[2][0]).toBe(1);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [2][2] seja 1', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[2][2]).toBe(1);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [2][3] seja 0', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[2][3]).toBe(0);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [3][0] seja 1', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[3][0]).toBe(1);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [3][1] seja 1', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[3][1]).toBe(1);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [3][2] seja 1', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[3][2]).toBe(1);
    });

    test.only('Dado a entrada *........*...... num campo 4 por 4, espero que o elemento [3][3] seja 0', () => {
        let minefield = new Minefield(4, 4, '*........*......');
        expect(minefield.field[3][3]).toBe(0);
    });
});