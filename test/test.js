const app = require('../app.js');
const request = require('supertest')(app);

describe('Validación de la Granja', function(){
  it('La API debe incluir los nuevos animales', function(done){
    request
      .get('/api')
      .set('Accept', 'application/json')
      .expect(200)
      .expect(function(res) {
        if (!res.body.duck) throw new Error("No encuentro al pato");
        if (!res.body.horse) throw new Error("No encuentro al caballo");
      })
      .end(done);
  });
});
