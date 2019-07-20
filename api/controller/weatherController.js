import request from 'request'

const WeatherController = {
    getWeatherOfLondon(req, res){
        const apiKey = '3d9bdb11a7bf434a610af4eb33dba7e2';
        const urlLink = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=3d9bdb11a7bf434a610af4eb33dba7e2";
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