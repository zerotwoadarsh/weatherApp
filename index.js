async function fetchData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5bb256c2f3msh53da85dd0923b14p1c7335jsn3fd539251ba1',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        cloud_pct.innerHTML = data.cloud_pct;
        temp.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:');
    }
}

fetchData();


const navSearch = document.getElementById('navSearch');
const searchHere = document.getElementById('searchHere');

navSearch.addEventListener('click', function(){
    searchHere.click();
})