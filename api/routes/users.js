import express from 'express';
import WeatherController from '../controller/weatherController'
const router = express.Router();





/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', WeatherController.getWeatherOfLondon);

module.exports = router;
