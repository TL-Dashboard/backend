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
  return db("tickets")
    .insert(record, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
function find() {
  return db("tickets").select("*");
}

function findBy(filter) {
  console.log("filter", filter);
  return db("tickets")
    .where(filter)
    .orderBy("id", "desc");
}

function findById(id) {
  return db("tickets")
    .select("*")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("tickets")
    .where({ id })
    .update(changes)
    .select("*");
}

function remove(id) {
  return db("tickets")
    .where("id", id)
    .del();
}
