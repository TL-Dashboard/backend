const db = require("../../database/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
};

function add(user) {
    return db("sectionleads")
        .insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function find() {
    return db("sectionleads").select("id", "email", "first_name", "last_name", "type", "cohort_id");
}

function findBy(filter) {
    return db("sectionleads")
        .where(filter)
        .orderBy('id', 'desc');
}

function findById(id) {
    return db("sectionleads")
        .select("id", "email", "first_name", "last_name", "type", "cohort_id")
        .where({ id })
        .first();
}

function update(changes, id) {
    return db('sectionleads')
      .where({ id })
      .update(changes)
      .select("id", "email", "first_name", "last_name", "type", "password", "cohort_id");
  }

function remove(id) {
    return db('sectionleads')
      .where('id', id)
      .del();
  }

// function findStudents(id) {
//     return db('students as st')
//         .join('sectionleads as a', 'a.id', 'st.admin_id')
//         .select('st.*')
//         .where('st.admin_id', id)
//         .orderBy('st.id');
// }

// function addStudent(studentData, id) {
//     const newStudent = {...studentData, admin_id: id}
//     return db('students')
//         .insert(newStudent)
//         .then(() => {
//             return findStudents(id)});
// }