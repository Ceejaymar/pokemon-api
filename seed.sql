DROP DATABASE IF EXISTS pokemon;
CREATE DATABASE pokemon;

\c pokemon;

CREATE TABLE towns (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE trainers (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL,
  hometown_id INT REFERENCES towns(id) NOT NULL
);

CREATE TABLE pokemons (
  id SERIAL PRIMARY KEY,
  trainer_id INT REFERENCES trainers(id) NOT NULL,
  name VARCHAR NOT NULL,
  level INT NOT NULL,
  type_1 VARCHAR NOT NULL,
  type_2 VARCHAR NULL
);

INSERT INTO towns (name) VALUES
('Pallet Town'), ('Viridian City'), ('Pewter City'), ('Cerulean City'), ('Vermillion City'), ('Lavender Town'), ('Celadon City'), ('Fuchsia City'), ('Saffron City'), ('Cinnabar Island');

INSERT INTO trainers (name, hometown_id) VALUES
('Ash', 1), /* 1 */
('Gary', 1), /* 2 */
('Giovanni', 2), /* 3 */
('Brock', 3), /* 4 */
('Misty', 4), /* 5 */
('Serge', 5), /* 6 */
('Erika', 7), /* 7 */
('Koga', 8), /* 8 */
('Sabrina', 9), /* 9 */
('Blaine', 10); /* 10 */

INSERT INTO pokemons (trainer_id, name, level, type_1, type_2) VALUES
(1, 'Pikachu', 100, 'electric', NULL),
(1, 'Charizard', 80, 'fire', 'flying'),
(1, 'Squirtle', 50, 'water', NULL),
(1, 'Bulbasaur', 50, 'grass', 'poison'),
(1, 'Pidgeot', 55, 'normal', 'flying'),
(1, 'Muk', 45, 'poison', NULL),
(2, 'Blastoise', 85, 'water', NULL),
(2, 'Nidoqueen', 80, 'poison', 'ground'),
(2, 'Arcanine', 80, 'fire', NULL),
(2, 'Electabuzz', 70, 'electric', NULL),
(3, 'Dugtrio', 49, 'ground', NULL),
(3, 'Nidoqueen', 49, 'poison', 'ground'),
(3, 'Nidoking', 49, 'poison', 'ground'),
(3, 'Rhydon', 49, 'ground', NULL),
(4, 'Geodude', 11, 'rock', 'ground'),
(4, 'Onix', 12, 'rock', 'ground'),
(5, 'Psyduck', 18, 'water', NULL),
(5, 'Starmie', 19, 'water', 'psychic'),
(6, 'Voltorb', 25, 'electric', NULL),
(6, 'Magnemite', 25, 'electric', 'steel'),
(6, 'Raichu', 26, 'electric', NULL),
(7, 'Tangela', 33, 'grass', NULL),
(7, 'Weepinbell', 33, 'grass', 'poison'),
(7, 'Vileplume', 34, 'grass', 'poison'),
(8, 'Weezing', 43, 'poison', NULL),
(8, 'Muk', 43, 'poison', NULL),
(8, 'Golbat', 43, 'poison', 'flying'),
(8, 'Venomoth', 44, 'poison', 'bug'),
(9, 'Mr.Mime', 43, 'psychic', 'fairy'),
(9, 'Slowbro', 43, 'psychic', 'water'),
(9, 'Jynx', 43, 'psychic', 'ice'),
(9, 'Alakazam', 44, 'psychic', NULL),
(10, 'Magmar', 47, 'fire', NULL),
(10, 'Rapidash', 47, 'fire', NULL),
(10, 'Ninetales', 47, 'fire', NULL),
(10, 'Arcanine', 48, 'fire', NULL);