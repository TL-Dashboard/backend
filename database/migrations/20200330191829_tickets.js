exports.up = function(knex) {
  return knex.schema.createTable("tickets", tbl => {
    tbl.increments();
    tbl.string("posted_by", 255).notNullable();
    tbl.string("type", 255).notNullable();
    tbl.datetime("date", 255).notNullable();
    tbl.text("description", 1024);
    tbl.string("status", 255).notNullable();
    tbl
      .integer("sectionlead_id")
      .unsigned()
      .references("id")
      .inTable("sectionleads")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("teamlead_id")
      .unsigned()
      .references("id")
      .inTable("teamleads")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("student_id")
      .unsigned()
      .references("id")
      .inTable("students")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tickets");
};
