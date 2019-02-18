const express = require('express');
const pokemonRouter = express.Router();
const PokemonService = require('../services/pokemon');

pokemonRouter.post('/', (req, res, next) => {
  const { trainer_id, name, level, type_1, type_2 } = req.body;

  PokemonService.create(trainer_id, name, level, type_1, type_2)
    .then(data => {
      res.json({ success: `Created pokemon named ${name} with generated ID: ${data.id}`});
    })
    .catch(err => {
      next(err);
    })
});

pokemonRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;

  PokemonService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

module.exports = pokemonRouter;
