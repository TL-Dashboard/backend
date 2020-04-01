const db = require("../../database/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    findGrades,
    findRetros,
    findAttendance
};

function add(user) {
    return db("students")
        .insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}
function find() {
    return db("students").select("id", "email", "first_name", "last_name", "type", "fifth_day", "cohort_id", "teamlead_id", "fifth_day_tl_id");
}

function findBy(filter) {
    return db("students")
        .where(filter)
        .orderBy('id', 'desc');
}

function findById(id) {
    return db("students")
        .select("*")
        .where({ id })
        .first();
}

function update(changes, id) {
    return db('students')
      .where({ id })
      .update(changes)
      .select("*");
  }

function remove(id) {
    return db('students')
      .where('id', id)
      .del();
  }

function findAttendance(id) {
    return db('attendance as a')
        .join('students as st', 'st.id', 'a.student_id')
        .select('a.*')
        .where('a.student_id', id)
        .orderBy('a.id', "desc");
}

function findGrades(id) {
    // console.log('Students-model findGrades', id)
    return db('grades as g')
        .join('students as st', 'st.id', 'g.student_id')
        .select('g.*')
        .where('g.student_id', id)
        .orderBy('g.id', "desc");
}

function findRetros(id) {
    return db('retros as r')
        .join('students as st', 'st.id', 'r.student_id')
        .select('r.*')
        .where('r.student_id', id)
        .orderBy('r.id', "desc");
}