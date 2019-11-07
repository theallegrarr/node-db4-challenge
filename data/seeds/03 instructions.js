exports.seed = function(knex) {
  return knex('instructions').truncate()
  .then(function() {
   return knex('instructions').insert([
    {step_number: 1, step: 'Mix the Eggs', recipe_id: 1},
    {step_number: 1, step: 'Mix the Pancake with water', recipe_id: 3},
    {step_number: 2, step: 'Mix the Eggs', recipe_id: 3},
    {step_number: 3, step: 'Fry the Pancake', recipe_id: 3},
   ]);
  })
}