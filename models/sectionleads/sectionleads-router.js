const router = require('express').Router();

const SectionLeads = require('./sectionleads-model.js');

router.get('/', (req, res) => {
  SectionLeads.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  SectionLeads.findById(id)
  .then(sectionlead => {
    if (sectionlead) {
      res.json(sectionlead);
    } else {
      res.status(404).json({ message: 'Could not find Section Lead with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Section Lead' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  SectionLeads.findById(id)
  .then(sectionlead => {
    if (sectionlead) {
      SectionLeads.update(changes, id)
      .then(() => {
        res.status(201).json({ message: `Sectionlead ${id} successfully updated`});
      });
    } else {
      res.status(404).json({ message: 'Could not find sectionlead with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update sectionlead' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  SectionLeads.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(201).json({ message: `Sectionlead ${id} successfully deleted` });
    } else {
      res.status(404).json({ message: 'Could not find sectionlead with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete sectionlead' });
  });
});

module.exports = router;

// router.get('/:id/students', (req, res) => {
//   const { id } = req.params;
//   SectionLeads.findStudents(id)
//   .then(steps => {
//     if (steps.length) {
//       res.json(steps);
//     } else {
//       res.status(404).json({ message: `Could not find students for sectionlead: ${id}` })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get steps' });
//   });
// });


// router.post('/:id/students', (req, res) => {
//   const studentData = req.body;
//   const { id } = req.params; 

//   SectionLeads.findById(id)
//   .then(sectionlead => {
//     if (sectionlead) {
//       SectionLeads.addStudent(studentData, id)
//       .then(student => {
//         res.status(201).json(student);
//       })
//     } else {
//       res.status(404).json({ message: 'Could not find sectionlead with given id.' })
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new step' });
//   });
// });