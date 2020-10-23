
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('professors').del()
    .then(function () {
      // Inserts seed entries
      return knex('professors').insert([
        {name: 'Girafales', email:'girafales@email.com', password: 'girafales'},
        {name: 'El Chapo', email:'elchapo@email.com', password: 'elchapo'},
      ]);
    });
};
