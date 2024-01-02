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


const cardData = [
    { title: "Temperature", content: "Card 1" },
    { title: "Wind Behaviour", content: "Card 2" },
    { title: "Sun Behaviour", content: "Card 3" }
];

function createCard(title, content) {
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 cardHead">
                <h4 class="my-0 fw-normal">${title}</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title"></h1>
                <ul class="list-unstyled mt-3 mb-4">
                    ${content}
                </ul>
            </div>
        </div>
    `;
    return card;
}


function renderCards() {
    const container = document.getElementById("dynamicCardContainer");

    cardData.forEach(({ title, content }) => {
        const card = createCard(title, content);
        container.appendChild(card);
    });
}
renderCards();

const searchDropdown = document.getElementById("searchDropdown");
const searchInput = document.getElementById("searchInput");

searchDropdown.addEventListener("click", function (event) {
    searchInput.focus();
});