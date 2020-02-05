const { Router } = require("express");
const router = new Router();
const Event = require("./model");
const Guest = require("../guest/model");

router.get("/event", (req, res, next) =>
  Event.findAll()
    .then(result => res.json(result))
    .catch(err => next(err))
);

router.get("/event/:id", (req, res, next) =>
  Event.findByPk(req.params.id, { include: [Guest] })
    .then(result => res.json(result))
    .catch(err => next(err))
);

router.post("/event", (req, res, next) => {
  const event = req.body;
  const { name, description, picture } = req.body;
  Event.create(event)
    .then(event => res.json(event))
    .then(event)
    .catch(err => next(err));
});

router.delete("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => {
      if (!event) {
        res.status(404).send("event not found");
      } else {
        event.destroy();
        res
          .status(200)
          .send(`event with Id ${req.params.id} removed succesfully`);
      }
    })
    .catch(next);
});

module.exports = router;
