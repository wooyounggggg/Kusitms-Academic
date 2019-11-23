var weather = document.getElementsByClassName('weather');
var newImg = document.createElement('img');
var weatherImageSpace = document.getElementsByClassName('weatherImage');
var tempSpace = document.getElementsByClassName('temp');
var humiSpace = document.getElementsByClassName('humi');

var apiURI = 'http://api.openweathermap.org/data/2.5/weather?q=' + 'seoul' + '&appid=' + 'cfdf931354078322db1f3219dc1b4cd4';
$.ajax({
    url: apiURI,
    dataType: 'json',
    type: 'GET',
    async: 'false',
    success: function (resp) {
        // console.log(resp);
        // console.log('현재온도 : ' + (resp.main.temp - 273.15));
        // console.log('현재습도 : ' + resp.main.humidity);
        // console.log('날씨 : ' + resp.weather[0].main);
        // console.log('상세날씨설명 : ' + resp.weather[0].description);
        // console.log('날씨 이미지 : ' + resp.weather[0].icon);
        // console.log('바람   : ' + resp.wind.speed);
        // console.log('나라   : ' + resp.sys.country);
        // console.log('도시이름  : ' + resp.name);
        // console.log('구름  : ' + resp.clouds.all + '%');

        // var imgURL = 'http://openweathermap.org/img/w/' + resp.weather[0].icon + '.png';
        // $(newImg).attr('src', imgURL);
        tempSpace[0].innerHTML = Math.floor(resp.main.temp - 273.15) + '°C';
        humiSpace[0].innerHTML = resp.main.humidity + '%';

        weatherImageSpace[0].appendChild(newImg);
    }
});