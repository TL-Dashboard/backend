const db = require("../../database/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
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
    console.log('filter', filter)
    return db("assignments")
        .where(filter)
        .orderBy('id', 'desc');
}

function findById(id) {
    return db("assignments")
        .select("*")
        .where({ id })
        .first();
}

function update(changes, id) {
    return db('assignments')
      .where({ id })
      .update(changes)
      .select("*");
  }

function remove(id) {
    return db('assignments')
      .where('id', id)
      .del();
  }