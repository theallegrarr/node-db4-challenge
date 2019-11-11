const express = require('express');
const db = require('../data/db-config');
const helpers = require('../data/helpers');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes= await helpers.getRecipes();

    res.status(200).json(recipes);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get recipes'})
  }
})

router.get('/:id/shoppinglist', async (req, res) => {
  try {
    const list= await helpers.getShoppingList(req.params.id);

    res.status(200).json(list);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get shopping list'})
  }
})

router.get('/:id/instructions', async (req, res) => {
  try {
    const list= await helpers.getInstructions(req.params.id);

    res.status(200).json(list);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get shopping list'})
  }
})

module.exports = router;