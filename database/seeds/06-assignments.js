
exports.seed = function(knex) {
    return knex('assignments').truncate()
      .then(function () {
        return knex('assignments').insert([
          {
            id: 1,
            unit: 'Web Fundamentals',
            sprint: 'User Interface and Git',
            name: 'User Interface I',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 2,
            unit: 'Web Fundamentals',
            sprint: 'User Interface and Git',
            name: 'Git for Web Development',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 3,
            unit: 'Web Fundamentals',
            sprint: 'User Interface and Git',
            name: 'User Interface II',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 4,
            unit: 'Web Fundamentals',
            sprint: 'User Interface and Git',
            name: 'User Interface III',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 5,
            unit: 'Web Fundamentals',
            sprint: 'User Interface and Git',
            name: 'Sprint Challenge - User Interface and Responsive Web Sprint Challenge',
            date: '2020-03-30',
            url: '',
            type: 'sprint',
            cohort_id: 1
          },
          //**************Next sprint: 
          {
            id: 6,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Responsive Design I',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 7,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Responsive Design II',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 8,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Preprocessing I',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 9,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Preprocessing II',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 10,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Sprint Challenge - Advanced CSS Sprint Challenge',
            date: '2020-03-30',
            url: '',
            type: 'sprint',
            cohort_id: 1
          },
        //**************Next sprint: 
          {
            id: 6,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Responsive Design I',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 7,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Responsive Design II',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 8,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Preprocessing I',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 9,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Preprocessing II',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 10,
            unit: 'Web Fundamentals',
            sprint: 'Advanced CSS',
            name: 'Sprint Challenge - Advanced CSS Sprint Challenge',
            date: '2020-03-30',
            url: '',
            type: 'sprint',
            cohort_id: 1
          },
        //**************Next sprint: 
          {
            id: 11,
            unit: 'Web Fundamentals',
            sprint: 'JavaScript Fundamentals',
            name: 'JavaScript I',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 12,
            unit: 'Web Fundamentals',
            sprint: 'JavaScript Fundamentals',
            name: 'JavaScript II',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 13,
            unit: 'Web Fundamentals',
            sprint: 'JavaScript Fundamentals',
            name: 'JavaScript III',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 14,
            unit: 'Web Fundamentals',
            sprint: 'JavaScript Fundamentals',
            name: 'JavaScript IV',
            date: '2020-03-30',
            url: '',
            type: 'module',
            cohort_id: 1
          },
          {
            id: 15,
            unit: 'Web Fundamentals',
            sprint: 'JavaScript Fundamentals',
            name: 'Sprint Challenge - JavaScript Foundations Sprint Challenge',
            date: '2020-03-30',
            url: '',
            type: 'sprint',
            cohort_id: 1
          },
        //**************Next sprint: 
          {
            id: 16,
            unit: 'Web Fundamentals',
            sprint: 'WEB Unit 1 Build',
            name: 'Delivering a Multi-Page Marketing Website',
            date: '2020-03-30',
            url: '',
            type: 'sprint',
            cohort_id: 1
          },
        ]);
      });
  };