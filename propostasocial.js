class PropostaSocial{
    constructor(necessidade, condicoes, tipo, solicitante, beneficios, local, fotos){
        this.Id = this.ObterNumeroAleatorio();
        this.Necessidade = necessidade;
        this.Condicoes = condicoes;
        this.Tipo = tipo;
        this.Solicitante = solicitante;
        this.Beneficios = beneficios;
        this.Local = local;
        this.distancia = this.ObterNumeroAleatorio() + " m"
        this.Fotos = fotos;
    }

    ObterNumeroAleatorio(){
        var min = 1;
        var max = 999;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


module.exports = PropostaSocial;