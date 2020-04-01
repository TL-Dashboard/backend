const router = require('express').Router();

const Admins = require('./admins-model.js');

router.get('/', (req, res) => {
  Admins.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Admins.findById(id)
  .then(admin => {
    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ message: 'Could not find admin with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Admins' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Admins.findById(id)
  .then(admin => {
    if (admin) {
      Admins.update(changes, id)
      .then(() => {
        res.status(201).json({ message: `Admin ${id} successfully updated`});
      });
    } else {
      res.status(404).json({ message: 'Could not find admin with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update admin' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Admins.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(201).json({ message: `Admin ${id} successfully deleted` });
    } else {
      res.status(404).json({ message: 'Could not find admin with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete admin' });
  });
});

module.exports = router;