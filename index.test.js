const campoMinado = require('./index')

test('Dado a entrada *........*...... num campo 4 por 4, eu espero que a segunda posição seja 1', () => {
    expect(campoMinado.returnCampoMinadoValue()).toBe('1');
});