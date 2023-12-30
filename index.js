const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const tableContent = document.querySelector(".tableContent");

async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5bb256c2f3msh53da85dd0923b14p1c7335jsn3fd539251ba1',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);
        content(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const heading = ["City", "Cloud_pct", "Temp", "Feels_like", "Humidity", "Min_temp", "Max_temp", "Wind_speed", "Wind_degrees", "Sunrise", "Sunset"];

const contentH = (heading) => {
    tableContent.innerHTML += heading.map((heading) => {
        return `<th style="width:10%">${heading}</th>`;
    }).join("");
};

const city = ["Bangalore", "Jhansi", "Rome", "Hong Kong", "Bangkok", "London", "Singapore"];

const content2 = (city) => {
    tableContent.innerHTML += city.map((city) => {
        return `<tr><th scope="row" class="text-start">${city}</th></tr>`;
    }).join("");
};



const content = (data) => {
    // Create header row

    // Create data rows
    const dataRows = data.map((item) => {
        return `<tr>
                    <td>${item.city}</td>
                    <td>${item.cloud_pct}</td>
                    <td>${item.temp}</td>
                    <td>${item.feels_like}</td>
                    <td>${item.humidity}</td>
                    <td>${item.min_temp}</td>
                    <td>${item.max_temp}</td>
                    <td>${item.wind_speed}</td>
                    <td>${item.wind_degrees}</td>
                    <td>${item.sunrise}</td>
                    <td>${item.sunset}</td>
                </tr>`;
    }).join("");

    // Set table content
    tableContent.innerHTML +=  dataRows;
};

fetchData();
contentH(heading);
content2(city);
