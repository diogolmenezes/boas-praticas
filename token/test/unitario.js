// test/unitario.js
const expect = require('chai').expect;

// criando uma sessão para os testes da classe token
describe('OiToken', function () {

    // importando a classe OiToken
    let oitoken = require('../OiToken');

    describe('Gerar', function () {
        it('Deve possuir o método gerar', function (done) {
            expect(oitoken).to.have.property('gerar');
            done();
        });

        it('Deve retornar uma string de 6 caracteres', function (done) {
            expect(oitoken.gerar().length).to.be.equal(6);
            done();
        });

        it('Deve gerar tokens diferentes', function (done) {
            let primeira = oitoken.gerar();
            let segunda = oitoken.gerar();
            let terceira = oitoken.gerar();

            expect(primeira).to.not.be.equal(segunda);
            expect(primeira).to.not.be.equal(terceira);
            expect(segunda).to.not.be.equal(terceira);

            done();
        });
    });
});