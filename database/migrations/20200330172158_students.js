exports.up = function(knex) {
    return knex.schema.createTable("students", tbl => {
      tbl.increments();
      tbl
        .string("email", 255)
        .notNullable()
        .unique();
      tbl.string("first_name", 255).notNullable();
      tbl.string("last_name", 255).notNullable();
      tbl.string("img_url", 1024);
      tbl.string("type", 255).notNullable();
      tbl.string('fifth_day', 255);
      tbl.string("password", 255).notNullable();
      tbl
        .integer("cohort_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("cohorts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("teamlead_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("teamleads")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("fifth_day_tl_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("teamleads")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("students");
  };