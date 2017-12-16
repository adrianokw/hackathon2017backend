class Interesse{
    constructor(propostaSocial, interessado){
        this.PropostaSocial = propostaSocial;
        this.Interessado = { Id: interessado.Id, Nome: interessado.Nome };
    }
}
module.exports = Interesse;
