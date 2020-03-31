
exports.seed = function(knex) {
  return knex('cohorts').truncate()
    .then(function () {
      return knex('cohorts').insert([
        {
          id: 1,
          name: 'Web29'
        },
        {
          id: 2,
          name: 'Web30'
        },
        {
          id: 3,
          name: 'UX13',
        },
      ]);
    });
};