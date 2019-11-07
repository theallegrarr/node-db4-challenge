const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes(){
  return db('recipes_book').then(res => {
    return res;
  }).catch(err => console.log(err))
}

function getShoppingList(id){
  return db('ingredients').where({ recipe_id: id }).then(res => {
    return res;
  }).catch(err => console.log(err))
}

function getInstructions(id){
  return db('instructions').where({ recipe_id: id }).then(res => {
    return res;
  }).catch(err => console.log(err))
}