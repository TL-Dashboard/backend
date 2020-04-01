const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function add(record) {
  return db("attendance")
    .insert(record, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
function find() {
  return db("attendance").select("*");
}

function findBy(filter) {
  console.log("filter", filter);
  return db("attendance")
    .where(filter)
    .orderBy("id", "desc");
}

function findById(id) {
  return db("attendance")
    .select("*")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("attendance")
    .where({ id })
    .update(changes)
    .select("*");
}

function remove(id) {
  return db("attendance")
    .where("id", id)
    .del();
}
