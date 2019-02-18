const express = require('express');
const trainerRouter = express.Router();
const TrainerService = require('../services/trainer');

trainerRouter.post('/' , (req, res, next) => {
  const { name, hometown } = req.body;

  TrainerService.create(name, hometown)
    .then(data => {
      res.json({ success: `Created trainer with generated ID: ${data.id}` })
    })
    .catch(err => {
      next(err);
    })
});

trainerRouter.get('/:name', (req, res, next) => {
  const { name } = req.params;

  TrainerService.read(name)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

trainerRouter.put('/:name', (req, res, next) => {
  const { name } = req.params;
  const { hometown } = req.body;

  TrainerService.update(name, hometown)
    .then(data => {
      res.json({ success: `Updated trainer named ${name} with hometown ID: ${hometown}` })
    })
})

trainerRouter.delete('/:name', (req, res, next) => {
  const { name } = req.params;
  
  TrainerService.delete(name)
    .then(data => {
      res.json({ success: `Deleted trainer named ${name}` })
    })
    .catch(err => {
      next(err);
    })
})

trainerRouter.get('/:name/pokemons', (req, res, next) => {
  const { name }  = req.params;
  const { levelmin } = req.query;
  
  if(levelmin) {
    TrainerService.getLevelPokemons(name, levelmin)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      })
  }
  else {
    TrainerService.getAllPokemons(name)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      })
  }
});


module.exports = trainerRouter;