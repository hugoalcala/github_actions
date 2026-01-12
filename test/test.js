const app = require('../app.js');
const request = require('supertest')(app);

describe('Pruebas de la Granja', function(){
    it('La API debe responder con éxito y tener los nuevos animales', function(done){
        request
        .get('/api')
        .set('Accept', 'application/json')
        .expect(200)
        .expect(function(res) {
            if (!res.body.duck) throw new Error("Falta el pato en app.js");
            if (!res.body.horse) throw new Error("Falta el caballo en app.js");
        })
        .end(done);
    });
});
