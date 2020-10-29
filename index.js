let campoMinado = (line, column) => new CampoMinado(line,column);

class CampoMinado{
        constructor(line, column, campo){
            this.line = line;
            this.column = column;
            this.campo = campo;
        }
        
        render(){
            let arrayCampo = this.campo.split('');
            let matrix = [];

            for (let i = 0 ; i < line ; i++){
                let initialPosition = i * this.column;
                let finalPosition = initialPosition + this.column;
                let matrixLine = arrayCampo.slice(initialPosition, finalPosition);
                matrix.push(matrixLine);
            }

            return matrix;
        }
}

const returnCampoMinadoValue = ()=> {

    let CampoMinadoFinal = new CampoMinado().campoFormatado
    console.log(CampoMinadoFinal)
    return CampoMinadoFinal
}

module.exports = {
    returnCampoMinadoValue,
    campoMinado
};