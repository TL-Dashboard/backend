const router = require("express").Router();

const Tickets = require("./tickets-model.js");

router.get("/", (req, res) => {
  console.log("getting records");
  Tickets.find()
    .then(records => {
      res.status(200).json(records);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id)
  Tickets.findById(id)
    .then(record => {
      if (record) {
        res.json(record);
      } else {
        res.status(404).json({ message: `Could not find record ${id}` });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get records" });
    });
});

router.get("/query/:filter", (req, res) => {
  Tickets.findBy(req.query)
    .then(record => {
      if (record) {
        res.json(record);
      } else {
        res.status(404).json({ message: `Could not find record ${param}` });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get records" });
    });
});

router.post("/", (req, res) => {
  const record = req.body;
  Tickets.add(record)
    .then(rec => {
      res.status(201).json(rec);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new record" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Tickets.findById(id)
    .then(record => {
      if (record) {
        Tickets.update(changes, id).then(() => {
          res
            .status(201)
            .json({ message: `Record ${id} successfully updated` });
        });
      } else {
        res.status(404).json({ message: `Could not find record ${id}` });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update record" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Tickets.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(201).json({ message: `Record ${id} successfully deleted` });
      } else {
        res
          .status(404)
          .json({ message: "Could not find record with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete record" });
    });
});

module.exports = router;
