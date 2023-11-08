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
        document.getElementById("cloud_pct").innerHTML = data.cloud_pct;
        document.getElementById("temp").innerHTML = data.temp;
        document.getElementById("feels_like").innerHTML = data.feels_like;
        document.getElementById("humidity").innerHTML = data.humidity;
        document.getElementById("min_temp").innerHTML = data.min_temp;
        document.getElementById("max_temp").innerHTML = data.max_temp;
        document.getElementById("wind_speed").innerHTML = data.wind_speed;
        document.getElementById("wind_degrees").innerHTML = data.wind_degrees;
        document.getElementById("sunrise").innerHTML = data.sunrise;
        document.getElementById("sunset").innerHTML = data.sunset;
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
