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
  return db("retros")
    .insert(record, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
function find() {
  return db("retros").select("*");
}

function findBy(filter) {
  console.log("filter", filter);
  return db("retros")
    .where(filter)
    .orderBy("id", "desc");
}

function findById(id) {
  return db("retros")
    .select("*")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("retros")
    .where({ id })
    .update(changes)
    .select("*");
}

function remove(id) {
  return db("retros")
    .where("id", id)
    .del();
}
