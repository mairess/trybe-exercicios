const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('Testa a API cacau Trybe com mais rotas.', function() {
    it('Usando o método GET em /chocolates/total para buscar o total de chocolates.', async function() {
        const response = minhaRequisição();

        expect(response.satus).to.be.equal(200);
    });
});