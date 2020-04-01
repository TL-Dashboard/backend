exports.up = function(knex) {
  return knex.schema.createTable("assignments", tbl => {
    tbl.increments();
    tbl.string("unit", 255).notNullable();
    tbl.string("sprint", 255).notNullable();
    tbl.string("name", 255).notNullable();
    tbl.datetime("due", 255).notNullable();
    tbl.string("url", 255).notNullable();
    tbl.string("type", 255).notNullable();
    tbl
      .integer("cohort_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("assignments");
};
