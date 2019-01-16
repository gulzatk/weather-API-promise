$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");


    let weatherService = new WeatherService();  // create instance of WeatherService class
    let promise = weatherService.getWeatherByCity(city);  // call the instance method and pass in user input

    promise.then(function(response) {
      body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//
//     let promise = new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f36b5d2b3aab82a7db26b42e6ea02dd7`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//
//     promise.then(function(response) {
//       let body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//     });
//   });
// });

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//     $.ajax({
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f36b5d2b3aab82a7db26b42e6ea02dd7`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//       },
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.");
//       }
//     });
//   });
// });

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     const city = $('#location').val();
//     $('#location').val("");
//
//     let request = new XMLHttpRequest();
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[f36b5d2b3aab82a7db26b42e6ea02dd7]`;
//
//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     }
//
//     request.open("GET", url, true);
//     request.send();
//
//    const getElements = function(response) {
//       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//     }
//   });
// });
