const express = require('express');
const trainerRouter = express.Router();

trainerRouter.get('/', (req, res, next) => {
  const { name } = req.params;

  trainerService.read(name)
    .then(data => {
      res.json({success: 'We hit this route'})
    })
    .catch(err => {
      next(err);
    })
});

module.exports = trainerRouter;