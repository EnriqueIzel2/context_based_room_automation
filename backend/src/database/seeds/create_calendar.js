exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('calendar').del()
    .then(function () {
      // Inserts seed entries
      return knex('calendar').insert([{
          professor_id: 1,
          discipline_id: 1,
          start_class: '2020-10-23 15:00',
          end_class: '2020-10-23 16:00',
          class_status: true
        },
      ]);
    });
};