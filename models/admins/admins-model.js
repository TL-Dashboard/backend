const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function add(user) {
  return db("admins")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db("admins").select("id", "email", "first_name", "last_name", "img_url", "type");
}

function findBy(filter) {
  return db("admins")
    .where(filter)
    .orderBy("id", "desc");
}

function findById(id) {
  return db("admins")
    .select("id", "email", "first_name", "last_name", "img_url", "type")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("admins")
    .where({ id })
    .update(changes)
    .select("id", "email", "first_name", "last_name", "img_url", "type", "password");
}

function remove(id) {
  return db("admins")
    .where("id", id)
    .del();
}
