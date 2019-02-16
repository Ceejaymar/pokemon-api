const express = require('express');
const townRouter = express.Router();
const TownService = require('../services/town');

townRouter.get('/:name/trainers', (req, res, next) => {
  const { name } = req.params;

  TownService.read(name)
    .then(data => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    })
});

module.exports = townRouter;