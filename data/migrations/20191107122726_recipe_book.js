
exports.up = function(knex) {
  return knex.schema.createTable('recipes_book', table => {
    table.increments();
    table.string('recipe', 128);
  }).createTable('ingredients', table => {
    table.increments();
    table.string('ingredient_name', 128);
    table.float('quantity').defaultTo(1);
    table.integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('recipes_book');
  }).createTable('instructions', table => {
    table.increments();
    table.string('step').notNullable();
    table.integer('step_number').notNullable();
    table.integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('recipes_book');
  }) 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients')
                    .dropTableIfExists('instructions')
                    .dropTableIfExists('recipes_book')
};
