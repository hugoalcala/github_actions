const app = require('../app.js');
const request = require('supertest')(app);

describe('GET', function(){
	  it('respuesta contiene text/html', function(done){
		      request
		      .get('/')
		      .set('Accept', 'text/html')
		      .expect('Content-Type', /html/)
		      .expect(200, done);
		    })

	  it('respuesta contiene George Orwell', function(done){
		      request
		      .get('/')
		      .set('Accept', 'text/html')
		      .expect(200, /George Orwell had a farm/ig, done);
		    })

	  it('/api respuesta contiene json', function(done){
		      request
		      .get('/api')
		      .set('Accept', 'application/json')
		      .expect('Content-Type', /json/)
		      .expect(200, done);
		    })

	  it('/api respuesta contiene los nuevos animales', function(done){
        request
        .get('/api')
        .set('Accept', 'application/json')
        .expect(200)
        .expect(function(res) {
            if (!res.body.duck) throw new Error("Falta el pato");
            if (!res.body.horse) throw new Error("Falta el caballo");
        })
        .end(done);
    });
})
