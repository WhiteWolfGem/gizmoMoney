import supertest from 'supertest';
import server from './server';

describe('server.ts', () => {
  afterAll((done) => {
    server.close();
    done();
  });

  test('GET /about', () => {
    return supertest(server)
      .get('/about')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          server: {
            name: 'Hello-World',
            version: '1.0.0',
            description: 'The best API in the world'
          },
        });
      });
  });

  test('GET /fake-uri', () => {
    return supertest(server)
      .get('/fake-uri')
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
