const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList
}

function getRecipes(){
  return db('recipes_book').then(res => {
    return res;
  }).catch(err => console.log(err))
}

function getShoppingList(){
  return db('ingredients').where({ recipe_id: req.params.id }).then(res => {
    return res;
  }).catch(err => console.log(err))
}