const campoMinado = () => {
    formatarCampo = formatarCampo()
};

class CampoMinado {
    constructor() {
        this.formatarCampo = () => {
            return '1';
        }
    }
}

module.exports = {
    CampoMinado
};