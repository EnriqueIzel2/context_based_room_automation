const database = require('../database/connection');


module.exports = {
  async calendar(req, res) {
    let { id, date } = req.params;

    id = parseInt(id);
      
    try{
      const data = await database('calendar')
        .select({
          calendarId: 'calendar.id',
          disciplineName: 'disciplines.name',
          classDate: 'calendar.class_date',
          classStart: 'calendar.class_start',
          classEnd: 'calendar.class_end',
          statusClass: 'calendar.class_status',
          classroomName: 'classroom.name',
          classroomStatus: 'classroom.status',
          classroomAirconditioner: 'classroom.airconditioner'
        })
        .join('professors', 'professors.id', '=', 'calendar.professor_id')
        .where('professors.id', id)
        .where('calendar.class_date', date)
        .join('disciplines', 'disciplines.id', '=', 'calendar.discipline_id')
        .join('classroom', 'classroom.id', '=', 'calendar.classroom_id')
      // .catch((error) => res.status(500).json({message: 'Some error on server', erro: error}));

     if(data === null) {
        res.status(400).send('Calendar not found');
     }
     else {
      res.status(200).send(data);
     }
    } catch(error) {
      res.status(500).send(error)
    }
  }
}


// /professors/