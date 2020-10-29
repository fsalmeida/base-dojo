let campoMinado = (value) => value


class CampoMinado{
        constructor(){
            this.campoFormatado = "1"
        }
        
        
            // formataCampo(campoParaFormatar){
                //     let arrayCampo = campoParaFormatar.split();
            
                //     arrayCampo.forEach(x => {
                    //         if(x == '*')
                    //             this.campoFormatado += "*";
                    //     })
                    // }
}

const returnCampoMinadoValue = ()=> {

    console.log(CampoMinado().campoFormatado)
    return CampoMinado.campoFormatado
}

module.exports = {
    returnCampoMinadoValue,
    campoMinado
};