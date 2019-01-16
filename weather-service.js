 class WeatherService {
  getWeatherByCity(city) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f36b5d2b3aab82a7db26b42e6ea02dd7`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
