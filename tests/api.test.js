const pactum = require('pactum');
const { mock } = pactum;

// Basic API test using PactumJS with a local mock server

describe('local mock api', () => {
  before(() => mock.start(3000));
  after(() => mock.stop());

  it('should return a mocked response', async () => {
    mock.addInteraction({
      request: {
        method: 'GET',
        path: '/posts/1'
      },
      response: {
        status: 200,
        body: { id: 1, title: 'Mock Post' }
      }
    });

    await pactum.spec()
      .get('http://localhost:3000/posts/1')
      .expectStatus(200)
      .expectJsonLike({ id: 1 });
  });
});
