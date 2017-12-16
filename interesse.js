class Interesse{
    constructor(trocaSocial, interessado){
        this.TrocaSocial = trocasocial;
        this.Interessado = { id: interessado.Id, nome: interessado.nome };
        
    }
}
module.exports = Interesse;
