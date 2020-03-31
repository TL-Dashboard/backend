exports.up = function(knex) {
    return knex.schema.createTable("retros", tbl => {
      tbl.increments();
      tbl.datetime("date", 255).notNullable();
      tbl.string("url", 1024).notNullable();
      tbl.integer('mood').notNullable();
      tbl.text("notes", 1024);
      tbl
        .integer("student_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("students")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("assignment_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("assignments")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("teamlead_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("teamleads")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("retros");
  };
  