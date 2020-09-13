//Yargs
const argv = require('./config/yargs').argv;

const weather = require('./weather/weather');

weather.getWeather(argv.address)
    .then(resp => console.log(`${ argv.address } temperature is ${ resp }°C`))
    .catch(err => console.log(`No results for ${ argv.address }`));