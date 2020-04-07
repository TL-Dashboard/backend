
exports.seed = function(knex) {
    return knex('tickets').truncate()
      .then(function () {
        return knex('tickets').insert([
          {
            id: 1,
            posted_by: "Robert Gordon",
            type: 'Attendance',
            date: '2020-04-01',
            description: 'Harry will be absent Friday 04/03',
            status: 'Completed',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: 1
          },
          {
            id: 2,
            posted_by: "Robert Gordon",
            type: 'Support Hours',
            date: '2020-04-01',
            description: 'Hermione is requesting support hours',
            status: 'Completed',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: 2
          },
          {
            id: 3,
            posted_by: "Robert Gordon",
            type: 'Attendance',
            date: '2020-04-01',
            description: 'Draco has missed three days',
            status: 'In-Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: 4
          },
          {
            id: 4,
            posted_by: "Robert Gordon",
            type: 'Other',
            date: '2020-04-01',
            description: 'Accio seeds for students',
            status: 'In-Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: null
          },
          {
            id: 5,
            posted_by: "Robert Gordon",
            type: 'Grades',
            date: '2020-04-01',
            description: 'Ron has recieved a 1 on last sprint',
            status: 'In-Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: 2
          },
          {
            id: 6,
            posted_by: "Robert Gordon",
            type: 'Support Hours',
            date: '2020-04-01',
            description: 'Luna is requesting support hours',
            status: 'In-Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: null
          },
          {
            id: 7,
            posted_by: "Michael Hart",
            type: 'Grades',
            date: '2020-04-01',
            description: 'Please make sure all sprint retros are submitted',
            status: 'In-Progress',
            sectionlead_id: 1,
            teamlead_id: 1,
            student_id: null
          },
          {
            id: 8,
            posted_by: "Robert Gordon",
            type: 'Other',
            date: '2020-04-01',
            description: 'Accio seeds!',
            status: 'In-Progress',
            sectionlead_id: 1,
            teamlead_id: 2,
            student_id: null
          },
          {
            id: 9,
            posted_by: "Robert Gordon",
            type: 'Attendance',
            date: '2020-04-01',
            description: 'Please report to platform 11 3/4',
            status: 'In-Progress',
            sectionlead_id: 1,
            teamlead_id: 2,
            student_id: null
          },
        ]);
      });
  };