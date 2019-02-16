const { db } = require('./dbConnect');
const TrainerService = {};

TrainerService.create = (name, hometown) => {
  const sql = `
    INSERT INTO 
      trainers (name, hometown_id)
    VALUES 
      ($[name], $[hometown])
    RETURNING id;
  `
  return db.one(sql, { name, hometown });
}

TrainerService.read = (name) => {
  const sql = `
    SELECT
      trainers.*,
      towns.name AS hometown_name
    FROM trainers
    JOIN towns
      ON trainers.hometown_id = towns.id
    WHERE
      trainers.name = $[name]
  `;
  return db.one(sql, { name })
}

TrainerService.update = (name, hometown) => {
  const sql = `
    Update trainers
    SET
      hometown_id = $[hometown]
    WHERE
      trainers.name = $[name]
  `;
  return db.none(sql, {name, hometown});
}

TrainerService.delete = (name) => {
  const sql = `
    DELETE FROM trainers WHERE name=$[name]
  `;
  return db.none(sql, {name});
}

TrainerService.getAllPokemons = (name) => {
  const sql = `
    SELECT
      pokemons.*,
      trainers.name AS trainer_name
    FROM pokemons
    JOIN trainers
      ON trainers.id = pokemons.trainer_id
    WHERE
      trainers.name = $[name]
  `;
  return db.any(sql, {name});
}

TrainerService.getLevelPokemons = (name, level) => {
  const sql = `
    SELECT
      p.*,
      t.name AS trainer_name
    FROM pokemons p
    JOIN trainers t
      ON t.id = p.trainer_id
    WHERE
      t.name = $[name] AND p.level >= $[level]
  `;
  return db.any(sql, {name, level});
}

module.exports = TrainerService;