/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('trains', function (table){
        table.increments('id').primary()
        table.string('train_name').notNullable()
        table.string('station_name').notNullable()
        table.string('borough').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('trains');
};
