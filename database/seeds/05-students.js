const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('students').truncate()
    .then(function () {
      return knex('students').insert([
        {
          id: 1,
          email: 'harry@potter.com',
          first_name: 'Harry',
          last_name: 'Potter',
          img_url: '',
          type: 'student',
          fifth_day: 'Friday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 1
        },
        {
          id: 2,
          email: 'hermione@granger.com',
          first_name: 'Hermione',
          last_name: 'Granger',
          img_url: '',
          type: 'student',
          fifth_day: 'Friday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 1
        },
        {
          id: 3,
          email: 'ron@weasley.com',
          first_name: 'Ron',
          last_name: 'Weasley',
          img_url: '',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 2
        },
        {
          id: 4,
          email: 'draco@malfoy.com',
          first_name: 'Draco',
          last_name: 'Malfoy',
          img_url: '',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 2
        },
        {
          id: 5,
          email: 'luna@lovegood.com',
          first_name: 'Luna',
          last_name: 'Lovegood',
          img_url: '',
          type: 'student',
          fifth_day: 'Friday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 1
        },
        {
          id: 6,
          email: 'ginny@weasley.com',
          first_name: 'Ginny',
          last_name: 'Weasley',
          img_url: '',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 2
        },
        {
          id: 7,
          email: 'harry1@potter.com',
          first_name: 'Harry',
          last_name: 'Potter',
          img_url: '',
          type: 'student',
          fifth_day: 'Sunday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 3
        },
        {
          id: 8,
          email: 'ron1@weasley.com',
          first_name: 'Ron',
          last_name: 'Weasley',
          img_url: '',
          type: 'student',
          fifth_day: 'Sunday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 3
        },
        {
          id: 9,
          email: 'hermione1@granger.com',
          first_name: 'Hermione',
          last_name: 'Granger',
          img_url: '',
          type: 'student',
          fifth_day: 'Sunday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 3
        },
        {
          id: 10,
          email: 'luna1@lovegood.com',
          first_name: 'Luna',
          last_name: 'Lovegood',
          img_url: '',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 4
        },
        {
          id: 11,
          email: 'ginny1@weasley.com',
          first_name: 'Ginny',
          last_name: 'Weasley',
          img_url: '',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 4
        },
        {
          id: 12,
          email: 'draco1@malfoy.com',
          first_name: 'Draco',
          last_name: 'Malfoy',
          img_url: '',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 4
        },
      ]);
    });
};