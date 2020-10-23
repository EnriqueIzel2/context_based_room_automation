const database = require('../database/connection');

test('Professor Girafales exist', async () => {
  const names = await database('professors')
    .select('name')
    .where('id', 1)
    .first();

  expect(names.name).toBe('Girafales')
});

test('Obtain professor Girafales calendar', async () => {
  const names = await database({disciplines: 'disciplines'})
    .select({
      disciplineName: 'disciplines.name',
      startClass: 'calendar.start_class',
      endClass: 'calendar.end_class',
      statusClass: 'calendar.class_status'
    })
    .join('calendar', 'calendar.professor_id', '=', 'disciplines.id')
    .join('professors', 'professors.id', '=', 'calendar.discipline_id')
    .first();

  expect(names).toEqual({
    disciplineName: "Tópicos Especiais 1",
    startClass: "2020-10-23 15:00", 
    endClass: "2020-10-23 16:00",
    statusClass: 1
  });
});