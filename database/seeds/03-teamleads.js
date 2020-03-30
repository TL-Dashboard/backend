const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('teamleads').truncate()
    .then(function () {
      return knex('teamleads').insert([
        {
          id: 1,
          email: 'robert@gordon.com',
          first_name: 'Robert',
          last_name: 'Gordon',
          type: 'TL',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
        },
        {
          id: 2,
          email: 'alexander@besse.com',
          first_name: 'Alexander',
          last_name: 'Besse',
          type: 'TL',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
        },
        {
          id: 3,
          email: 'angel@guzman.com',
          first_name: 'Angel',
          last_name: 'Guzman',
          type: 'TL',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 2,
        },
        {
          id: 4,
          email: 'pedro@prieto.com',
          first_name: 'Pedro',
          last_name: 'Prieto',
          type: 'TL',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 2,
        },
      ]);
    });
};