exports.up = async function(knex) {

    await knex.schema.createTable('me_todo', (table) => {

        table.increments('id').primary();

        table.string('activity').notNullable();

        table.boolean('completed').defaultTo(false);

    });

};

exports.down = async function(knex) {

    await knex.schema.dropTableIfExists('me_todo');

};