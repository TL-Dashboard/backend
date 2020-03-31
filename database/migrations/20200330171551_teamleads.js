exports.up = function(knex) {
    return knex.schema.createTable("teamleads", tbl => {
      tbl.increments();
      tbl
        .string("email", 255)
        .notNullable()
        .unique();
      tbl.string("first_name", 255).notNullable();
      tbl.string("last_name", 255).notNullable();
      tbl.string("type", 255).notNullable();
      tbl.string('fifth_day', 255);
      tbl.string("password", 255).notNullable();
      tbl
        .integer("cohort_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("cohorts")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("teamleads");
  };