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
  return db("cohorts")
    .insert(record, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
function find() {
  return db("cohorts").select("*");
}

function findBy(filter) {
  console.log("filter", filter);
  return db("cohorts")
    .where(filter)
    .orderBy("id", "desc");
}

function findById(id) {
  return db("cohorts")
    .select("*")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("cohorts")
    .where({ id })
    .update(changes)
    .select("*");
}

function remove(id) {
  return db("cohorts")
    .where("id", id)
    .del();
}
