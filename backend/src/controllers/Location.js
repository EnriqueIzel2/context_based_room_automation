function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi/180);
}

module.exports = {
  inEST(req, res) {
    const { lat, long } = req.params;

    const latEST = -3.091659
    const longEST = -60.017877;
    let result = 1 * Math.acos(
      Math.cos(degrees_to_radians(latEST)) *
      Math.cos(degrees_to_radians(lat)) *
      Math.cos(degrees_to_radians(longEST) - degrees_to_radians(long)) +
      Math.sin(degrees_to_radians(latEST)) *
      Math.sin(degrees_to_radians(lat))  
    );

    if (result <= 1) {
      res.status(200).json({inEst: true, distance: result})
    }
    else {
      res.json({inEst: false, distance: result})
    }

  }

}