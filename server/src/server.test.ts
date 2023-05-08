import supertest from 'supertest';
import server from './server';
import pool from './utils/database';

describe('server.ts', () => {
  afterAll((done) => {
    pool.end();
    server.close();
    done();
  });

  test('DB Connect', async () => {
    const client = await pool.connect();
    client.query('SELECT NOW()', (err) => {
      expect(err).toBeNull();
    });
    client.release();
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
            description: 'The best API in the world',
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
