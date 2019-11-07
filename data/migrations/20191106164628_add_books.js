
exports.up = function(knex) {
  return knex.schema.createTable('books', function(table) {
      table.increments();
      table.string('title', 255).notNullable();
      table.string('author', 255).notNullable();
      table.integer('page_count')
      table.integer('isbn')
      table.string('genre', 255)
      table.integer('year_published')

      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books');
};
