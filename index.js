let campoMinado = new CampoMinado();

module.exports = {
    campoMinado
};

class CampoMinado{
    constructor(){
        this.campoFormatado = ""
    }

    formataCampo(campoParaFormatar){
        let arrayCampo = campoParaFormatar.split();

        arrayCampo.forEach(x => {
            if(x == '*')
                this.campoFormatado += "*";
        })
    }
}