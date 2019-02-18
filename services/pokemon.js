const { db } = require('./dbConnect');
const PokemonService = {};

PokemonService.create = (trainer_id, name, level, type_1, type_2) => {
  const sql = `
    INSERT INTO 
      pokemons (name, trainer_id, level, type_1, type_2)
    VALUES 
      ( $[name],
        $[trainer_id],
        $[level],
        $[type_1],
        $[type_2] )
    RETURNING id;
  `;
  return db.one(sql, { trainer_id, name, level, type_1, type_2 });
}

PokemonService.read = (id) => {
  const sql = `
    SELECT 
      pokemons.*,
      trainers.name AS trainer_name
    FROM pokemons
    JOIN trainers
      ON pokemons.trainer_id = trainers.id
    WHERE
      pokemons.id = $[id]
  `;
  return db.one(sql, { id });
}

PokemonService.update = (trainer, name, level, type_1, type_2, id) => {
  const sql = `
    UPDATE pokemons
    SET
      trainer_id = $[trainer],
      name = $[name],
      level = $[level],
      type_1 = $[type_1],
      type_2 = $[type_2]
    WHERE
      pokemons.id = $[id]
  `;
  return db.none(sql, { trainer, name, level, type_1, type_2, id })
};

PokemonService.delete = (id) => {
  const sql = `
    DELETE FROM pokemons
    WHERE pokemons.id = $[id]
  `
  return db.none(sql, { id });
};

PokemonService.getAllWithType = (type) => {
  const sql = `
    SELECT
      pokemons.*,
      trainers.name AS trainer_name
    FROM pokemons
    JOIN trainers
      ON pokemons.trainer_id = trainers.id
    WHERE
      pokemons.type_1 = $[type] OR pokemons.type_2 = $[type]
  `
  return db.any(sql, { type });
}

module.exports = PokemonService;