
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('disciplines').del()
    .then(function () {
      // Inserts seed entries
      return knex('disciplines').insert([
        {name: 'Tópicos Especiais 1'},
        {name: 'Tópicos Especiais 2'},
        {name: 'Game Design'},
      ]);
    });
};
