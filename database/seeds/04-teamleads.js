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
          img_url: '',
          type: 'TL',
          fifth_day: 'Friday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
        },
        {
          id: 2,
          email: 'alexander@besse.com',
          first_name: 'Alexander',
          last_name: 'Besse',
          img_url: '',
          type: 'TL',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
        },
        {
          id: 3,
          email: 'angel@guzman.com',
          first_name: 'Angel',
          last_name: 'Guzman',
          img_url: '',
          type: 'TL',
          fifth_day: 'Sunday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
        },
        {
          id: 4,
          email: 'pedro@prieto.com',
          first_name: 'Pedro',
          last_name: 'Prieto',
          img_url: '',
          type: 'TL',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
        },
      ]);
    });
};