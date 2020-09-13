const axios = require('axios');

const getWeather = async(address) => {
    const encodeAddress = encodeURI(address);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&q=${ encodeAddress }&appid=3b31bc245984d28021a998d5c5c8848f&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}