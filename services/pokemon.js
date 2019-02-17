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

module.exports = PokemonService;