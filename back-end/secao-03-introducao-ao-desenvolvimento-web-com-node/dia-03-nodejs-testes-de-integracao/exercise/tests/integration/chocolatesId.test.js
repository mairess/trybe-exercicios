const chai = require('chai');
const chaiHttp = require('chai-http');
const readChocolates = require('../../src/getAllChocalates');
const app = require('../../src/app')

const { expect } = chai;

chai.use(chaiHttp);

describe('Testa a API cacau Trybe com mais rotas.', function() {
    it('Usando o método GET em /chocolates/total para buscar o total de chocolates.', async function() {
        const output = [
            { "id": 1, "name": "Mint Intense", "brandId": 1 },
            { "id": 2, "name": "White Coconut", "brandId": 1 },
            { "id": 3, "name": "Mon Chéri", "brandId": 2 },
            { "id": 4, "name": "Mounds", "brandId": 3 }
        ];
        
        const response = await chai.request(app).get('/chocolates/total');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal(output);
    });
});