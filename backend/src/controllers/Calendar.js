const database = require('../database/connection');


module.exports = {
  async cancelClass(req, res) {
    let { calendarId } = req.params;

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

    res.status(200).json({message: `The ${calendarId} status was changed`})
  }
}


// /professors/