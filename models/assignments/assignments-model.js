const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByCohort,
  update,
  remove
};

function add(record) {
  return db("assignments")
    .insert(record, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
function find() {
  return db("assignments").select("*");
}

function findBy(filter) {
  console.log("filter", filter);
  return db("assignments")
    .where(filter)
    .orderBy("id", "desc");
}

function findById(id) {
  return db("assignments")
    .select("*")
    .where({ id })
    .first();
}

function findByCohort(id) {
    return db("assignments")
      .select("*")
      .where("cohort_id", id );
  }

function update(changes, id) {
  return db("assignments")
    .where({ id })
    .update(changes)
    .select("*");
}

function remove(id) {
  return db("assignments")
    .where("id", id)
    .del();
}
