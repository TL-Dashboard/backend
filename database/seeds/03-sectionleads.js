const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('sectionleads').truncate()
    .then(function () {
      return knex('sectionleads').insert([
        {
          id: 1,
          email: 'michael@hart.com',
          first_name: 'Michael',
          last_name: 'Hart',
          img_url: '',
          type: 'SL',
          password: bcrypt.hashSync('testtest', 10),
          fifth_day: null,
          cohort_id: 1,
        },
        {
          id: 2,
          email: 'shannon@reed.com',
          first_name: 'Shannon',
          last_name: 'Reed',
          img_url: '',
          type: 'SL',
          fifth_day: null,
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
        },
        {
          id: 3,
          email: 'section@lead.com',
          first_name: 'Jill',
          last_name: 'Jackson',
          img_url: '',
          type: 'SL',
          fifth_day: null,
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 2,
        },
      ]);
    });
};