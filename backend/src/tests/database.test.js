const database = require('../database/connection');

test('Professor Girafales exist', async () => {
  const names = await database('professors')
    .select('name')
    .where('id', 1)
    .first();

  expect(names.name).toBe('Girafales')
});

test('Obtain professor Girafales calendar', async () => {
  const professorId = 1;
  const data = await database({disciplines: 'disciplines'})
    .select({
      disciplineName: 'disciplines.name',
      startClass: 'calendar.class_start',
      endClass: 'calendar.class_end',
      statusClass: 'calendar.class_status',
    })
    .where('professors.id', professorId) 
    .join('calendar', 'calendar.professor_id', '=', 'disciplines.id')
    .join('professors', 'professors.id', '=', 'calendar.discipline_id')
    .first();

  expect(data).toEqual({
    disciplineName: "Tópicos Especiais 1",
    startClass: "15:00", 
    endClass: "16:00",
    statusClass: 1
  });
});

test('Filter calendar by date', async () => {
  const date = '2020-10-26';
  const data = await database('calendar')
    .select({
      calendarId: 'calendar.id',
      disciplineName: 'disciplines.name',
      classStart: 'calendar.class_start',
      classEnd: 'calendar.class_end',
      statusClass: 'calendar.class_status',
      classroomName: 'classroom.name',
      classroomStatus: 'classroom.status',
      classroomAirconditioner: 'classroom.airconditioner'
    })
    .where('calendar.class_date', date)
    .join('disciplines', 'disciplines.id', '=', 'calendar.discipline_id')
    .join('classroom', 'classroom.id', '=', 'calendar.classroom_id')
    // .first();

  expect(data).toEqual([{
      "calendarId": 1,
      "classEnd": "16:00",
      "classStart": "15:00",
      "classroomAirconditioner": 0,
      "classroomName": "A16",
      "classroomStatus": 0,
      "disciplineName": "Tópicos Especiais 1",
      "statusClass": 1
    }, 
    {
      "calendarId": 2,
      "classEnd": "20:00",
      "classStart": "19:00",
      "classroomAirconditioner": 0,
      "classroomName": "B12", 
      "classroomStatus": 0,
      "disciplineName": "Tópicos Especiais 2",
      "statusClass": 0
    }
  ]);
});