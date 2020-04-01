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
  return db("grades")
    .insert(record, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
function find() {
  return db("grades").select("*");
}

function findBy(filter) {
  console.log("filter", filter);
  return db("grades")
    .where(filter)
    .orderBy("id", "desc");
}

function findById(id) {
  return db("grades")
    .select("*")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("grades")
    .where({ id })
    .update(changes)
    .select("*");
}

function remove(id) {
  return db("grades")
    .where("id", id)
    .del();
}
