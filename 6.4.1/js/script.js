const APIKey = '30425c3bff3016233a1d64dbafd04b11';
const form = document.forms[0];

let xhr = new XMLHttpRequest();

	form.onsubmit = function (e) {
	e.preventDefault();

	const city = form.elements.city.value;
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

	xhr.open('GET', url, false);

	xhr.send();
	
	if(xhr.status != 200) {
	console.log(xhr.status + ' ' + xhr.statusText);
} else {
	
	let DATA = JSON.parse(xhr.responseText);
	let temperature = document.createElement('h2');
	temperature.textContent = 'Temperature: '+ Math.round(DATA.main.temp - 273) + 'C';
	let windSpeed = document.createElement('h3');
	windSpeed.textContent = 'Wind Speed: '+ (DATA.wind.speed);

	document.body.append(temperature);
	document.body.append(windSpeed);
	}
}



