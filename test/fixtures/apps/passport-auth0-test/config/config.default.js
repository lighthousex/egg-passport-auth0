'use strict';

exports.passportAuth0 = {
  domain: process.env.EGG_PASSPORT_AUTH0_CONSUMER_Domain,
  clientID: process.env.EGG_PASSPORT_AUTH0_CONSUMER_CLIENTID,
  clientSecret: process.env.EGG_PASSPORT_AUTH0_CONSUMER_CLIENTSECRET,
  callbackURL: process.env.EGG_PASSPORT_AUTH0_CONSUMER_CALLBACKURL,
};
