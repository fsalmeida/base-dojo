let campoMinado = (line, column, campo) => new CampoMinado(line,column,campo);

class CampoMinado{
        constructor(line, column, campo){
            this.line = line;
            this.column = column;
            this.campo = campo;
        }
        
        render(){
            let arrayCampo = this.campo.split('');
            let matrix = [];
            for (let i = 0 ; i < this.line ; i++){
                let initialPosition = i * this.column;
                let finalPosition = initialPosition + this.column;
                let matrixLine = arrayCampo.slice(initialPosition, finalPosition);                
                matrix.push(matrixLine);
            }

            return matrix;
        }

        convertFields(matriz){
            
        }
}


module.exports = {
    campoMinado
};