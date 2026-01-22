const express = require('express');
const _ = require('underscore');

const port = process.env.PORT || 3000;

// 1. El objeto con todos los animales (incluyendo duck y horse)
const animals = {
    "cat": "meow",
    "dog": "bark",
    "eel": "hiss",
    "bear": "growl",
    "frog": "croak",
    "lion": "roar",
    "bird": "tweet",
    "duck": "quack",
    "horse": "neigh"
};

// 2. Función para elegir un animal al azar de la lista completa
function getAnimal() {
  return _.sample(Object.entries(animals));
}

const app = express();

// 3. Ruta principal: ahora usará el objeto actualizado
app.get('/', async (req, res, next) => {
  try {
    const [animal_name, sound] = getAnimal();
    res.status(200).send(`
      George Orwell had a farm.<br />
      E-I-E-I-O<br />
      And on his farm he had a ${animal_name}.<br />
      E-I-E-I-O<br />
      With a ${sound}-${sound} here.<br />
      And a ${sound}-${sound} there.<br />
      Here a ${sound}, there a ${sound}.<br />
      Everywhere a ${sound}-${sound}.<br />
    `);
  } catch (error) {
    next(error);
  }
});

// 4. Ruta API: enviará el JSON que el test necesita para ponerse en VERDE
app.get('/api', async (req, res, next) => {
  try {
    res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
