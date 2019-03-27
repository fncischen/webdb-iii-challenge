
exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(tbl){
      tbl.increments("id");
      tbl.integer("cohort_id")
        .notNullable()
        .references(id)
        .inTable("cohorts");
      tbl.text("name").notNullable();

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("students");
};
