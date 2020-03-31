exports.up = function(knex) {
  return knex.schema.createTable("cohorts", tbl => {
    tbl.increments();
    tbl.string("name", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cohorts");
};
