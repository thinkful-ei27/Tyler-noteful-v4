'use strict';

const bcrypt = require('bcryptjs');
const password = 'password';

bcrypt.hash(password, 10)
  .then(digest => {
    console.log('digest = ', digest);
    return digest;
  })
  .catch(err => {
    console.error('error', err);
  });



