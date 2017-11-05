// OiToken.js
class OiToken {
    gerar() {
        // por ser um exemplo, não levamos em consideração como esse numero é gerado
        // precisamos apenas de um numero aleatorio de 6 caracteres
        var token = String(parseInt(Math.random() * (999999 - 111111) + 111111));

        return token;
    };
};

module.exports = new OiToken();