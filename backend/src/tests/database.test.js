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

test('Cancel a calendar class', async () => {
  const calendarId = 1;

  const classStatus = await database('calendar')
    .select('class_status')
    .where('id', '=', calendarId)
    .first()

  if(classStatus.class_status) {
    classStatus.class_status = 0;
  } else {
    classStatus.class_status = 1;
  }

  const data = await database('calendar')
  .where('id', '=', calendarId)
  .update({class_status: classStatus.class_status})
  expect(data).toBe(1);
});

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi/180);
}
// -3.091659, -60.017877
test('Calculate location in a Raio', async () => {
  const lat = -51.01
  const long = -2.5;
  let result = 1 * Math.acos(
    Math.cos(degrees_to_radians(-3.091659)) *
    Math.cos(degrees_to_radians(lat)) *
    Math.cos(degrees_to_radians(-60.017877) - degrees_to_radians(long)) +
    Math.sin(degrees_to_radians(-3.091659)) *
    Math.sin(degrees_to_radians(lat))  
  )

  expect(result).toBe(2);
});