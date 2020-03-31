exports.up = function(knex) {
  return knex.schema.createTable("tickets", tbl => {
    tbl.increments();
    tbl.string("type", 255).notNullable();
    tbl.datetime("date", 255).notNullable();
    tbl.text("description", 1024);
    tbl.string("status", 255).notNullable();
    tbl
      .integer("sectionlead_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("sectionleads")
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
    tbl
      .integer("student_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("students")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tickets");
};
