import request from 'request'
import apiKey from '../keys/apiKey'

const WeatherController = {
    getWeatherOfLondon(req, res){
        // const api = apiKey
        const urlLink = `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=${apiKey}`;
        request(urlLink, (err, response, body) => {
            if(err){
                console.log(err)
            }else{
                let weather = JSON.parse(body);
                // return res.json({
                //     status:"success",
                //     data:weather
                // }).status(200);
                res.render('layout', {weather:weather});
            }
    });
    }
}

export default WeatherController;