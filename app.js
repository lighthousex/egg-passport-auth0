'use strict';

// const debug = require('debug')('egg-passport-auth0');
const assert = require('assert');
const Auth0Strategy = require('passport-auth0');

module.exports = app => {
  const config = app.config.passportAuth0;

  config.passReqToCallback = true;
  assert(
    config.domain,
    '[egg-passport-auth0] config.passportAuth0.domain required'
  );
  assert(
    config.clientID,
    '[egg-passport-auth0] config.passportAuth0.clientID required'
  );
  assert(
    config.clientSecret,
    '[egg-passport-auth0] config.passportAuth0.clientSecret required'
  );
  assert(
    config.callbackURL,
    '[egg-passport-auth0] config.passportAuth0.callbackURL required'
  );

  // config.consumerKey = config.key;
  // config.consumerSecret = config.secret;

  // must require `req` params
  app.passport.use(
    'auth0',
    new Auth0Strategy(
      config,
      (req, token, tokenSecret, params, profile, done) => {
        return done(null, profile);
      }
    )
  );

  app.passport.serializeUser(function(user, done) {
    done(null, user);
  });

  app.passport.deserializeUser(function(user, done) {
    done(null, user);
  });
};
