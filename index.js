//var Moment = require('moment');
var CurrentTime = moment();


//const request = require ('request');
//const argv = require ('yargs').argv;

 let apiKey = '4890ec8c1a44083580937d9c9371b03a';
 //let city = 'charlotte';/*argv.c || 'charlotte';*/
 //let zipcode = "28255";
 //let countrycode = 'US';
 //let url = `http://api.openweathermap.org/data/2.5/weather?q=${zipcode}&units=imperial&appid=${apiKey}`;
 //let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

// var toHtml = $('#btn').on('click',function(){
//      var input= $('#zipinpt').val();
//      console.log(input);
//      $.get(`http://api.openweathermap.org/data/2.5/weather?q=` + input +`&units=imperial&appid=`+apiKey,function(result){    
      
//      console.log(result);  
//       var p=$('<p></p>'); 
//       let message=`It's ${result.main.temp} degrees in ${result.name} at ${CurrentTime.format('h:mm:ss a')}!`;       
//       var msg=  p.text(message);      
//       $('#displayMoment').append(msg);   
        
//     });        
    
// });


//      request(url, function (e+rr, response, body) {
        
//         if(err){
//           console.log('error:',error);
//         } else {
//           //console.log('body:',body);
//             let weather = JSON.parse(body)
//             let message = `It's ${weather.main.temp} degrees in ${weather.name} at ${CurrentTime.format('h:mm:ss a')}!`;
//             console.log(message);
//         }
//   });

var toHtml = $('#btn').on('click',function(){
  var input= $('#zipinpt').val();
       console.log(input);
       $.get(`http://api.openweathermap.org/data/2.5/weather?q=` + input +`,US&units=imperial&appid=`+apiKey,function(result){  
         console.log(result);  
         
        var city= result.name;
        var temp=`${Math.round(result.main.temp)} &#176;F`;
        var desc=result.weather[0].description;
        var icon=("<img src='http://openweathermap.org/img/w/" + result.weather[0].icon + ".png'>");
        var hiNlow=`${Math.round(result.main.temp_max)} &#176;F/ ${Math.round(result.main.temp_min)}  &#176;F`;
        var time=CurrentTime.format('llll');
        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').html(icon);
        $('.time').html(time);
        $('#hi-low').html(hiNlow);
       });

       
});



  