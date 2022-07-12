var button = document.querySelector('.button')
var inputValue= document.querySelector('.search_box')
var city = document.querySelector('.city')
var temp = document.querySelector('.temp')
var weather = document.querySelector('.weather')
var desc = document.querySelector('.high-low')
var pressure = document.querySelector('.current_date')


button.addEventListener('click',function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3dce4d8e4a1297eec22b45aba7fc15ca')
    .then(response => response.json())
    .then(data => {{
        var cityValue = data['name'];
        var tempValue = data['main']['temp'];
        var weatherValue = data['weather'][0]['main'];
        var descValue = data['weather'][0]['description'];
        var pressureValue = data['main']['pressure'];
        var humid= data['main']['humidity'];
        

        city.innerHTML = cityValue;
        temp.innerHTML = Math.floor(tempValue - 273.14) + "°C";
        weather.innerHTML = weatherValue; 
        desc.innerHTML = descValue;
        pressure.innerHTML = "Pressure: " + pressureValue +"  "+ "Humidity: " + humid;
    }})

.catch(err=>alert("Wrong city!"))

})

