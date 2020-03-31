const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('admins').truncate()
    .then(function () {
      return knex('admins').insert([
        {
          id: 1,
          email: 'test@test.com',
          first_name: 'Testy',
          last_name: 'McTesterson',
          type: 'admin',
          password: bcrypt.hashSync('testtest', 10)
        },
        {
          id: 2,
          email: 'admin@test.com',
          first_name: 'Lambda',
          last_name: 'Admin',
          type: 'admin',
          password: bcrypt.hashSync('testtest', 10)
        },
        {
          id: 3,
          email: 'neo@matrix.com',
          first_name: 'Neo',
          last_name: 'Anderson',
          type: 'admin',
          password: bcrypt.hashSync('testtest', 10)
        },
      ]);
    });
};