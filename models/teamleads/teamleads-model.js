const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
  findStudents
};

function add(user) {
  return db("teamleads")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db("teamleads").select(
    "id",
    "email",
    "first_name",
    "last_name",
    "type",
    "fifth_day",
    "cohort_id"
  );
}

function findBy(filter) {
  return db("teamleads")
    .where(filter)
    .orderBy("id", "desc");
}

function findById(id) {
  return db("teamleads")
    .select("id", "email", "first_name", "last_name", "type", "cohort_id")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("teamleads")
    .where({ id })
    .update(changes)
    .select(
      "id",
      "email",
      "first_name",
      "last_name",
      "type",
      "password",
      "cohort_id"
    );
}

function remove(id) {
  return db("teamleads")
    .where("id", id)
    .del();
}

function findStudents(id) {
  return db("students as st")
    .join("teamleads as tl", "tl.id", "st.teamlead_id")
    .select(
      "st.id",
      "st.email",
      "st.first_name",
      "st.last_name",
      "st.type",
      "st.fifth_day",
      "st.cohort_id",
      "st.teamlead_id",
      "st.fifth_day_tl_id"
    )
    .where("st.teamlead_id", id)
    .orderBy("st.id");
}

// function findStudents(id) {
//     return db('students as st')
//         .join('teamleads as a', 'a.id', 'st.admin_id')
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
