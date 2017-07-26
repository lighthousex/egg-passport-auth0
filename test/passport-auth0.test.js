'use strict';

const request = require('supertest');
const mm = require('egg-mock');

process.env.EGG_PASSPORT_AUTH0_CONSUMER_Domain = 'domain';
process.env.EGG_PASSPORT_AUTH0_CONSUMER_CLIENTID = 'client id';
process.env.EGG_PASSPORT_AUTH0_CONSUMER_CLIENTSECRET = 'client secret';
process.env.EGG_PASSPORT_AUTH0_CONSUMER_CALLBACKURL = 'callback';

describe('test/passport-auth0.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-auth0-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportAuth0')
      .expect(200);
  });
});
