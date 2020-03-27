const request = require('supertest');
const app = require('../../src/app');


describe('ONG' , () =>{
    it('should be able to create a new ONG',async () =>{
        const response = await request(app).post('/ongs').send({
            name : "APAD",
            email : "contato@APAD.com.br",
            whatsapp : "470000000",
            city: "Rio do sul",
            uf: "SC"
        });
        console.log(response);

    })
})