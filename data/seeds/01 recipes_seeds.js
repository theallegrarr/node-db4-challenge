
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_book').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_book').insert([
        {id: 1, recipe: 'Cake'},
        {id: 2, recipe: 'Bread'},
        {id: 3, recipe: 'Pancakes'}
      ]);
    });
};
