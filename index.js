const BOMB_SYMBOL = '*';

const buildField = (lines, columns, inputField) => {
    let field = splitInputFieldIntoMatrixField(lines, columns, inputField);
    identifyNumberOfBombsOnEachFieldElement(field);

    return field;
}

const identifyNumberOfBombsOnEachFieldElement = (field) => {
    for (let l = 0; l < field.length; l++) {
        let currentLine = field[l];
        for (let c = 0; c < currentLine.length; c++) {
            let targerElement = currentLine[c];
            let isBomb = targerElement == BOMB_SYMBOL;
            if (isBomb)
                continue;

            let boundaries = findBoundaries(field, l, c);
            let boundariesElements = boundaries.map(boundary => field[boundary.line][boundary.column]);
            let nearbyBombsCount = boundariesElements.filter(elem => elem == BOMB_SYMBOL).length;
            field[l][c] = nearbyBombsCount;
        }
    }
}

const findBoundaries = (field, targetLine, targetColumn) => {
    const initialBoundaryLine = targetLine - 1;
    const finalBoundaryLine = targetLine + 1;
    const initialBoundaryColumn = targetColumn - 1;
    const finalBoundaryColumn = targetColumn + 1;
    let boundaries = [];

    for (let currentLine = initialBoundaryLine; currentLine <= finalBoundaryLine; currentLine++) {
        if (!validateLine(field, currentLine))
            continue;

        for (let currentColumn = initialBoundaryColumn; currentColumn <= finalBoundaryColumn; currentColumn++) {
            if (!validateColumn(field, currentColumn))
                continue;

            let isTargetElement = currentLine == targetLine && currentColumn == targetColumn;
            if (!isTargetElement) {
                boundaries.push({ line: currentLine, column: currentColumn });
            }
        }
    }

    return boundaries;
}

const validateLine = (field, line) => {
    return line >= 0 && line < field.length;
}

const validateColumn = (field, column) => {
    let firstLine = field[0];
    return column >= 0 && column < firstLine.length;
}

const splitInputFieldIntoMatrixField = (lines, columns, inputField) => {
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