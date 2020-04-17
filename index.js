var Moment = require('moment');
var CurrentTime = new Moment();


const request = require ('request');
const argv = require ('yargs').argv;

 let apiKey = '4890ec8c1a44083580937d9c9371b03a';
 let city = argv.c || 'charlotte';
 let zipcode = "28255";
 let countrycode = 'US';
 let url = `http://api.openweathermap.org/data/2.5/weather?q=${zipcode}&units=imperial&appid=${apiKey}`;
 //let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

var toHtml = $('#btn').on('click',function(){
     var input= $('#zipinpt').val();
})
     request(url, function (err, response, body) {
        
        if(err){
          console.log('error:',error);
        } else {
          //console.log('body:',body);
            let weather = JSON.parse(body)
            let message = `It's ${weather.main.temp} degrees in ${weather.name} at ${CurrentTime.format('h:mm:ss a')}!`;
            console.log(message);
        }
  });



  