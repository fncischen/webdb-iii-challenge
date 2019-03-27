
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {cohort_id: 2, name: "Student G"},
        {cohort_id: 2, name: "Student H"},
        {cohort_id: 2, name: "Student I"}
      ]);
    });
};
