
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {id: 1, name: 'cohort g'},
        {id: 2, name: 'cohort h'},
        {id: 3, name: 'cohort i'}
      ]);
    });
};
