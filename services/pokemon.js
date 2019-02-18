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
  `
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

module.exports = PokemonService;