exports.up = function(knex) {
    return knex.schema.createTable("attendance", tbl => {
      tbl.increments();
      tbl.datetime("date", 255).notNullable();
      tbl.string("time",255).notNullable();
      tbl.boolean("present", 255).notNullable();
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
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("attendance");
  };