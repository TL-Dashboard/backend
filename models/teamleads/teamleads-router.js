const router = require('express').Router();

const TeamLeads = require('./teamleads-model.js');

router.get('/', (req, res) => {
  TeamLeads.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  TeamLeads.findById(id)
  .then(teamlead => {
    if (teamlead) {
      res.json(teamlead);
    } else {
      res.status(404).json({ message: 'Could not find Team Lead with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Team Lead' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  TeamLeads.findById(id)
  .then(teamlead => {
    if (teamlead) {
      TeamLeads.update(changes, id)
      .then(() => {
        res.status(201).json({ message: `teamlead ${id} successfully updated`});
      });
    } else {
      res.status(404).json({ message: 'Could not find teamlead with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update teamlead' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  TeamLeads.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(201).json({ message: `teamlead ${id} successfully deleted` });
    } else {
      res.status(404).json({ message: 'Could not find teamlead with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete teamlead' });
  });
});

module.exports = router;

// router.get('/:id/students', (req, res) => {
//   const { id } = req.params;
//   TeamLeads.findStudents(id)
//   .then(steps => {
//     if (steps.length) {
//       res.json(steps);
//     } else {
//       res.status(404).json({ message: `Could not find students for teamlead: ${id}` })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get steps' });
//   });
// });


// router.post('/:id/students', (req, res) => {
//   const studentData = req.body;
//   const { id } = req.params; 

//   TeamLeads.findById(id)
//   .then(teamlead => {
//     if (teamlead) {
//       TeamLeads.addStudent(studentData, id)
//       .then(student => {
//         res.status(201).json(student);
//       })
//     } else {
//       res.status(404).json({ message: 'Could not find teamlead with given id.' })
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new step' });
//   });
// });