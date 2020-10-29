let campoMinado = (line, column) => new CampoMinado(line,column);

class CampoMinado{
        constructor(line, column){
            this.line = line;
            this.column = column;
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