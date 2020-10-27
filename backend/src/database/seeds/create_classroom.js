exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('classroom').del()
    .then(function () {
      // Inserts seed entries
      return knex('classroom').insert([{
        name: 'B12',
        status: false,
        airconditioner: false
      },
      {
        name: 'A16',
        status: false,
        airconditioner: false,
      }
      ]);
    });
};