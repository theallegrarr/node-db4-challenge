const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes= await db('recipes_book');

    res.status(200).json(recipes);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get recipes'})
  }
})

module.exports = router;