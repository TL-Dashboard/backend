const router = require("express").Router();

const TeamLeads = require("./teamleads-model.js");
const Students = require("../students/students-model.js");

router.get("/", (req, res) => {
  TeamLeads.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  TeamLeads.findById(id)
    .then(teamlead => {
      if (teamlead) {
        res.json(teamlead);
      } else {
        res
          .status(404)
          .json({ message: "Could not find Team Lead with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Team Lead" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  TeamLeads.findById(id)
    .then(teamlead => {
      if (teamlead) {
        TeamLeads.update(changes, id).then(() => {
          res
            .status(201)
            .json({ message: `teamlead ${id} successfully updated` });
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find teamlead with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update teamlead" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  TeamLeads.remove(id)
    .then(deleted => {
      if (deleted) {
        res
          .status(201)
          .json({ message: `teamlead ${id} successfully deleted` });
      } else {
        res
          .status(404)
          .json({ message: "Could not find teamlead with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete teamlead" });
    });
});

router.get("/:id/students", (req, res) => {
  const { id } = req.params;
  TeamLeads.findStudents(id)
    .then(students => {
      if (students.length) {
        res.json(students);
      } else {
        res
          .status(404)
          .json({ message: `Could not find students for teamlead: ${id}` });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get steps" });
    });
});

//async functions getData & useDbMethod resolve multiple promises
const useDbMethod = async (getId, dbMethod) => {
  return await dbMethod(getId);
};

const getData = async (array, dbMethod) => {
  const newArray = array.map(async student => {
    return await useDbMethod(student.id, dbMethod);
  });
  return Promise.all(newArray);
};

router.get("/:id/studentdata", async (req, res) => {
  const { id } = req.params;
  try {
    const students = await TeamLeads.findStudents(id);
    const grades = await getData(students, Students.findGrades);
    const retros = await getData(students, Students.findRetros);
    const attendance = await getData(students, Students.findAttendance);
    const data = students.map((student, index) => {
      return {
        ...student,
        attendance: attendance[index],
        grades: grades[index],
        retros: retros[index]
      };
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to get Student Data", err });
  }
});

router.get("/:id/studentdata-5thday", async (req, res) => {
  const { id } = req.params;
  try {
    const students = await TeamLeads.find5thDayStudents(id);
    const grades = await getData(students, Students.findGrades);
    const retros = await getData(students, Students.findRetros);
    const attendance = await getData(students, Students.findAttendance);
    const data = students.map((student, index) => {
      return {
        ...student,
        attendance: attendance[index],
        grades: grades[index],
        retros: retros[index]
      };
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to get Student Data", err });
  }
});

module.exports = router;
