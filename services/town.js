const { db } = require('./dbConnect');
const TownService = {};

TownService.read = (name) => {
  const sql = `
    SELECT 
      trainers.*,
      towns.name AS hometown_name
    FROM trainers
    JOIN towns
      ON trainers.hometown_id = towns.id
    WHERE
      towns.name = $[name]
  `;
  return db.any(sql, {name});
} 

module.exports = TownService;