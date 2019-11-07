
exports.up = function(knex) {
  return knex.schema.createTable('recipes_book', table => {
    table.increments();
    table.string('recipe', 128);
    table.string('instructions');
  }).createTable('ingredients', table => {
    table.increments();
    table.string('ingredient_name', 128);
    table.float('quantity').defaultTo(1);
    table.integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('recipe');
  }) 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients')
                    .dropTableIfExists('recipes_book');
};
