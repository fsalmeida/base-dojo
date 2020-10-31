const buildField = (lines, columns, inputField) => {
    let fieldElements = inputField.split('');
    let field = [];

    for (let i = 0; i < lines; i++) {
        let initialPosition = i * columns;
        let finalPosition = initialPosition + columns;
        let fieldLine = fieldElements.slice(initialPosition, finalPosition);
        field.push(fieldLine);
    }

    return field;
}

class Minefield {
    constructor(lines, columns, inputField) {
        this.lines = lines;
        this.columns = columns;
        this.field = buildField(lines, columns, inputField)
    }
}


module.exports = {
    Minefield
};