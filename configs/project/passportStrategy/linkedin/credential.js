module.exports = {
  default: {
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true,
  },
  development: {
    clientID: '81mdfind2v4bq2',
    clientSecret: 'NzDPCMFpwyC1KnmB',
    callbackURL: 'http://localhost:3000/auth/linkedin/callback',
  },
  test: {
    clientID: '81mdfind2v4bq2',
    clientSecret: 'NzDPCMFpwyC1KnmB',
    callbackURL: 'http://localhost:5566/auth/linkedin/callback',
  },
  production: {

    clientID: '81mdfind2v4bq2',
    clientSecret: 'NzDPCMFpwyC1KnmB',
    callbackURL: 'https://uniclub2.herokuapp.com/auth/linkedin/callback',
  },
};
