const api = 'http://api.weatherapi.com/v1';
const curr = '/current.json';
let city = 'Idaho';

const key = '4c9526a956a34865982201050231605';
function weatherCall(event){
    event.preventDefault();
    var location = document.forms['weather']['location'].value;
    const report = document.getElementById("report");
    const condition = document.getElementById("condition");
    fetch(`${api+curr}?key=${key}&q=${location}`)
        .then(response => response.json())
        .then(data => {
        report.textContent = data.current.temp_f;
        condition.textContent = data.current.condition.text;
    })
    .catch(error => {
        console.log("An error occurred while fetching weather data:", error);
    });
};
