exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function() {
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Eggs', quantity: 2, recipe_id: 1},
        {id: 2, ingredient_name: 'Eggs', quantity: 4, recipe_id: 2},
        {id: 3, ingredient_name: 'Sugar', quantity: 2, recipe_id: 2},
        {id: 4, ingredient_name: 'Sugar', quantity: 2, recipe_id: 1},
        {id: 5, ingredient_name: 'Dough', quantity: 2, recipe_id: 3}
      ]);
    })
}