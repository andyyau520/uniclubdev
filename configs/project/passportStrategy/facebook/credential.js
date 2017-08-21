module.exports = {
  default: {
    // ref: <https://developers.facebook.com/docs/graph-api/reference/user>
    profileFields: ['id', 'displayName', 'email', 'picture'],
  },
  development: {
    clientID: '1428478190606674',
    clientSecret: '5a10739d0d5963c52bc18a176d358252',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
  },
  test: {
    clientID: '1428478190606674',
    clientSecret: '5a10739d0d5963c52bc18a176d358252',
    callbackURL: 'http://localhost:5566/auth/facebook/callback',
  },
  production: {
    clientID: '1428478190606674',
    clientSecret: '5a10739d0d5963c52bc18a176d358252',
    callbackURL: 'https://uniclub2.herokuapp.com/auth/facebook/callback',
  },
};
