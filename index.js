let campoMinado = (line, column) => new CampoMinado(line,column);

class CampoMinado{
        constructor(line, column, campo){
            this.line = line;
            this.column = column;
            this.campo = campo;
        }
        
        render(){
            let arrayCampo = this.campo.split('');
            let campoFormatado = "";

            arrayCampo.forEach(x => {
                if(x == '*')
                    
            })
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