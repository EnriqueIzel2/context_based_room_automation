exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('calendar').del()
    .then(function () {
      // Inserts seed entries
      return knex('calendar').insert([{
          professor_id: 1,
          discipline_id: 1,
          classroom_id: 2,
          class_date: '2020-10-26',
          class_start: '15:00',
          class_end: '16:00',
          class_status: true
        },
        {
          professor_id: 2,
          discipline_id: 2,
          classroom_id: 1,
          class_date: '2020-10-26',
          class_start: '19:00',
          class_end: '20:00',
          class_status: false
        }
      ]);
    });
};