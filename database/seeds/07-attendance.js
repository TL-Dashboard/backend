exports.seed = function(knex) {
  return knex('attendance').truncate()
    .then(function () {
      return knex('attendance').insert([
        {
          id: 1,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 1,
          assignment_id: 1 
        },
        {
          id: 2,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 2,
          assignment_id: 1 
        },
        {
          id: 3,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 3,
          assignment_id: 1 
        },
        {
          id: 4,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 4,
          assignment_id: 1
        },
        {
          id: 5,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 5,
          assignment_id: 1 
        },
        {
          id: 6,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 6,
          assignment_id: 1 
        },
        {
          id: 7,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 7,
          assignment_id: 1
        },
        {
          id: 8,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 8,
          assignment_id: 1
        },
        {
          id: 9,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 9,
          assignment_id: 1
        },
        {
          id: 10,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 10,
          assignment_id: 1
        },
        {
          id: 11,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 11,
          assignment_id: 1
        },
        {
          id: 12,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 12,
          assignment_id: 1
        },
        {
          id: 13,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 1,
          assignment_id: 2 
        },
        {
          id: 14,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 2,
          assignment_id: 2 
        },
        {
          id: 15,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'false',
          notes: '',
          student_id: 3,
          assignment_id: 2 
        },
        {
          id: 16,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 4,
          assignment_id: 2 
        },
        {
          id: 17,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 5,
          assignment_id: 2 
        },
        {
          id: 18,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 6,
          assignment_id: 2 
        },
        {
          id: 19,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 7,
          assignment_id: 2 
        },
        {
          id: 20,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 8,
          assignment_id: 2 
        },
        {
          id: 21,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 9,
          assignment_id: 2 
        },
        {
          id: 22,
          date: '2020-03-31',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 10,
          assignment_id: 2 
        },
        {
          id: 23,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 11,
          assignment_id: 2
        },
        {
          id: 24,
          date: '2020-03-30',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 12,
          assignment_id: 2
        },
        {
          id: 25,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 1,
          assignment_id: 3 
        },
        {
          id: 26,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 2,
          assignment_id: 3 
        },
        {
          id: 27,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'false',
          notes: '',
          student_id: 3,
          assignment_id: 3 
        },
        {
          id: 28,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'false',
          notes: '',
          student_id: 4,
          assignment_id: 3
        },
        {
          id: 29,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 5,
          assignment_id: 3 
        },
        {
          id: 30,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 6,
          assignment_id: 3 
        },
        {
          id: 31,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 7,
          assignment_id: 3
        },
        {
          id: 32,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 8,
          assignment_id: 3
        },
        {
          id: 33,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 9,
          assignment_id: 3
        },
        {
          id: 34,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 10,
          assignment_id: 3
        },
        {
          id: 35,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 11,
          assignment_id: 3
        },
        {
          id: 36,
          date: '2020-04-01',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 12,
          assignment_id: 3
        },
        {
          id: 37,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 1,
          assignment_id: 4 
        },
        {
          id: 38,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 2,
          assignment_id: 4 
        },
        {
          id: 39,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'false',
          notes: '',
          student_id: 3,
          assignment_id: 4 
        },
        {
          id: 40,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'false',
          notes: '',
          student_id: 4,
          assignment_id: 4 
        },
        {
          id: 41,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 5,
          assignment_id: 4 
        },
        {
          id: 42,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 6,
          assignment_id: 4 
        },
        {
          id: 43,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 7,
          assignment_id: 4 
        },
        {
          id: 44,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 8,
          assignment_id: 4 
        },
        {
          id: 45,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 9,
          assignment_id: 4 
        },
        {
          id: 46,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 10,
          assignment_id: 4 
        },
        {
          id: 47,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 11,
          assignment_id: 4
        },
        {
          id: 48,
          date: '2020-04-02',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 12,
          assignment_id: 4
        },
        {
          id: 49,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 1,
          assignment_id: 5 
        },
        {
          id: 50,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 2,
          assignment_id: 5 
        },
        {
          id: 51,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'false',
          notes: '',
          student_id: 3,
          assignment_id: 5 
        },
        {
          id: 52,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'false',
          notes: '',
          student_id: 4,
          assignment_id: 5 
        },
        {
          id: 53,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 5,
          assignment_id: 5 
        },
        {
          id: 54,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 6,
          assignment_id: 5 
        },
        {
          id: 55,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 7,
          assignment_id: 5 
        },
        {
          id: 56,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 8,
          assignment_id: 5 
        },
        {
          id: 57,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 9,
          assignment_id: 5 
        },
        {
          id: 58,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 10,
          assignment_id: 5 
        },
        {
          id: 59,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 11,
          assignment_id: 5
        },
        {
          id: 60,
          date: '2020-04-03',
          time_slot: 'Stand-up',
          present: 'true',
          notes: '',
          student_id: 12,
          assignment_id: 5
        },
      ]);
    });
};