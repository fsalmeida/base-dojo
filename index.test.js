const campoMinado = require('./index')
const mockCampoMinado = campoMinado.campoMinado(4,4, '*........*......');

test('Dado a entrada de campo 4 por 4, espero que a line seja 4', () => {
    expect(campoMinado.campoMinado(4,4, '*........*......').line).toBe(4);
});

test('Dado a entrada de campo 4 por 4, espero que a column seja 4', () => {
    expect(campoMinado.campoMinado(4,4, '*........*......').column).toBe(4);
});

test('Dado a entrada *........*...... num campo 4 por 4, espero que a matrix seja construida corretamente', () => {
    let campoMinado = campoMinado.render();
    expect(campoMinado).toBe(mockCampoMinado);
    
});