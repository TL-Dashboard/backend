const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('students').truncate()
    .then(function () {
      return knex('students').insert([
        {
          id: 1,
          email: 'bryan@adams.com',
          first_name: 'Bryan',
          last_name: 'Adams',
          type: 'student',
          fifth_day: 'Friday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 1
        },
        {
          id: 2,
          email: 'lexie@jiang.com',
          first_name: 'Lexie',
          last_name: 'Jiang',
          type: 'student',
          fifth_day: 'Friday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 1
        },
        {
          id: 3,
          email: 'jimbo@jones.com',
          first_name: 'Jimbo',
          last_name: 'Jones',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 2
        },
        {
          id: 4,
          email: 'bart@simpson.com',
          first_name: 'Bart',
          last_name: 'Simpson',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 2
        },
        {
          id: 5,
          email: 'liza@simpson.com',
          first_name: 'Liza',
          last_name: 'Simpson',
          type: 'student',
          fifth_day: 'Friday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 1
        },
        {
          id: 6,
          email: 'maggie@simpson.com',
          first_name: 'Maggie',
          last_name: 'Simpson',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 1,
          fifth_day_tl_id: 2
        },
        {
          id: 7,
          email: 'harry@potter.com',
          first_name: 'Harry',
          last_name: 'Potter',
          type: 'student',
          fifth_day: 'Sunday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 3
        },
        {
          id: 8,
          email: 'ron@weasley.com',
          first_name: 'Ron',
          last_name: 'Weasley',
          type: 'student',
          fifth_day: 'Sunday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 3
        },
        {
          id: 9,
          email: 'hermione@granger.com',
          first_name: 'Hermione',
          last_name: 'Granger',
          type: 'student',
          fifth_day: 'Sunday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 3
        },
        {
          id: 10,
          email: 'luna@lovegood.com',
          first_name: 'Luna',
          last_name: 'Lovegood',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 4
        },
        {
          id: 11,
          email: 'ginny@weasley.com',
          first_name: 'Ginny',
          last_name: 'Weasley',
          type: 'student',
          fifth_day: 'Saturday',
          password: bcrypt.hashSync('testtest', 10),
          cohort_id: 1,
          teamlead_id: 2,
          fifth_day_tl_id: 4
        },
        {
          id: 12,
          email: 'draco@malfoy.com',
          first_name: 'Draco',
          last_name: 'Malfoy',
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