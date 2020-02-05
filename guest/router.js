const { Router } = require("express");
const router = new Router();
const Guest = require("./model");

router.get("/guest", (req, res, next) => {
  Guest.findAll()
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.post("/guest", (req, res, next) => {
  const guest = req.body;

  Guest.create(guest)
    .then(guest => res.send(guest))
    .catch(err => next(err));
});

router.delete("/guest/:id", (req, res, next) => {
  Guest.findByPk(req.params.id)
    .then(guest => {
      if (!guest) {
        res.status(404).send("Guest not found");
      } else {
        guest.destroy();
        res
          .status(200)
          .send(`guest with Id ${req.params.id} removed succesfully`);
      }
    })
    .catch(next);
});

module.exports = router;
