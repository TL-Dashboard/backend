
exports.seed = function(knex) {
    return knex('tickets').truncate()
      .then(function () {
        return knex('tickets').insert([
          {
            id: 1,
            posted_by: "Robert Gordon",
            type: 'Attendance',
            date: '2020-04-01',
            description: 'Bryan will be absent Friday 04/03',
            status: 'In Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: 1
          },
          {
            id: 2,
            posted_by: "Lexie Jiang",
            type: 'Support Hours',
            date: '2020-04-01',
            description: 'Lexie is requesting support hours',
            status: 'In Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: 2
          },
          {
            id: 3,
            posted_by: "Robert Gordon",
            type: 'Attendance',
            date: '2020-04-01',
            description: 'Student has missed three days',
            status: 'In Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: 3
          },
          {
            id: 4,
            posted_by: "Robert Gordon",
            type: 'Grades',
            date: '2020-04-01',
            description: 'Students has recieved a 1 on last sprint',
            status: 'In Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: 3
          },
          {
            id: 5,
            posted_by: "Robert Gordon",
            type: 'Other',
            date: '2020-04-01',
            description: 'When can Lambda begin using this new dashboard?',
            status: 'In Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: null
          },
          {
            id: 6,
            posted_by: "Robert Gordon",
            type: 'Other',
            date: '2020-04-01',
            description: 'Should we add a posted_by column?',
            status: 'Completed',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: null
          },
        ]);
      });
  };