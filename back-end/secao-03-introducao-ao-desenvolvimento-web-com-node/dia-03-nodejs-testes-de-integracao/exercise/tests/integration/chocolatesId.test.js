const chai = require('chai');
const chaiHttp = require('chai-http');
const readChocolates = require('../../src/getAllChocalates');
const app = require('../../src/app')
const sinon = require('sinon');
const fs = require('fs').promises;

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
    "brands": [
        {
            "id": 1,
            "name": "Lindt & Sprungli"
        },
        {
            "id": 2,
            "name": "Ferrero"
        },
        {
            "id": 3,
            "name": "Ghirardelli"
        }
    ],
    "chocolates": [
        {
            "id": 1,
            "name": "Mint Intense",
            "brandId": 1
        },
        {
            "id": 2,
            "name": "White Coconut",
            "brandId": 1
        },
        {
            "id": 3,
            "name": "Mon Chéri",
            "brandId": 2
        },
        {
            "id": 4,
            "name": "Mounds",
            "brandId": 3
        }
    ]
});

beforeEach(() => {
    sinon.stub(fs, 'readFile').resolves(mockFile);
    sinon.stub(fs, 'writeFile').resolves();
});

afterEach(() => {
    sinon.restore();
})

describe('Testa a API cacau Trybe com mais rotas.', function() {
    it('Usando o método GET em /chocolates/total para buscar o total de chocolates.', async function() {

        const response = await chai.request(app).get('/chocolates/total');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({totalChocolates: 4});
    });


    it('Usando o método GET em /chocolates/search para buscar os chocolates que contém o termo pesquisado.', async function() {

        const response = await chai.request(app).get('/chocolates/search?name=Mo');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal([
            {
              "id": 3,
              "name": "Mon Chéri",
              "brandId": 2
            },
            {
              "id": 4,
              "name": "Mounds",
              "brandId": 3
            }
          ]);

        const emptyResponse = await chai.request(app).get('/chocolates/search?name=ZZZ');


        expect(emptyResponse.status).to.be.equal(404);
        expect(emptyResponse.body).to.deep.equal([]);

    });

    it('Usando o método PUT em /chocolates/:id atualiza um chocolate que existe na base de dados.', async function() {

        const response = await chai.request(app).put('/chocolates/1').send({
            "name": "Mint Pretty Good",
            "brandId": 2
          });;

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({
            "chocolate": { 
              "id": 1,
              "name": "Mint Pretty Good",
              "brandId": 2
            }
          });

          const noFoundIdResponse = await chai.request(app).put('/chocolates/555').send({
            "name": "Mint Pretty Good",
            "brandId": 2
          });;

          expect(noFoundIdResponse.status).to.be.equal(404);
          expect(noFoundIdResponse.body).to.deep.equal({ "message": "chocolate not found" });

    });
});