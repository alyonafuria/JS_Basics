const APIKey = '30425c3bff3016233a1d64dbafd04b11';
const city = 'Moscow';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
let happiness = 0;
let xhr = new XMLHttpRequest();
const form = document.forms[0];

//1. Дождаться прогрузки окна, после этого выполнять весь код программы.
window.onload = function() {

//2. Создать класс Person
class Person {
	//а. Конструктор класса как аргумент содержит name.
	constructor(name) {
		//b. Сам конструктор класса содержит this.name равное аргументу и this.happiness равное 0.
		this.name = name;
		this.happiness = 0;
	}
	/*3. Методы класса:
	a. hasCat() — возвращает this.happiness увеличенное на 1.
	b. hasRest() — возвращает this.happiness увеличенное на 1.
	c. hasMoney() — возвращает this.happiness увеличенное на 1.
	d. isSunny() — получает данные о погоде в Москве из API и в случае если температура в цельсиях больше 15 
	градусов. увеличивает this.happiness на 1 и возвращает this.happiness (всегда возвращается this.happiness, 
	независимо, увеличили на 1 или нет). */
	hasCat() {
		return this.happiness++;
	}
	hasRest() {
		return this.happiness++;
	}
	hasMoney() {
		return this.happiness++;
	}
	isSunny() {
	xhr.open('GET', url, false);
	xhr.send();

	let DATA = JSON.parse(xhr.responseText);
	let temperature = DATA.main.temp - 273;

	if (temperature > 15) {
		return this.happiness++
	} else {
		return this.happiness;
	}
	}
}

/*4. Когда мы заполняем форму в левой колонке и нажимаем submit, происходит такой алгоритм:
a. Отменяется дефолтное событие.
b. Собираются в переменные все данные из формы.
c. Создается экземпляр класса Person, с аргументом name взятом из поля ввода с именем.
d. Делаются проверки, если радиобаттоны установлены на yes в полях «Есть кот?», «Отдыхал недавно?», 
	«Денег ок?», то вызываются методы hasCat(), hasRest() и hasMoney() созданного экземпляра соответственно
e. Вызывается метод isSunny() созданного экземпляра.
f. Выбираются элементы .personName и .icon.
g. В .personName вставьте namе экземпляра и знак :
h. Осуществляется проверка итогового значения happiness экземпляра. Если значение 4 вставьте иконку 😁в блок .icon,
	если 2 или 3 — 😐, в противном случае — ☹️

Результат работы скрипта:
https://yadi.sk/i/-fkDSlVI3WMY7Q

Обратите внимание, что скрипт должен работать так, что при погоде ниже 15 градусов, выражение лица будет нейтральным, 
а не счастливым. Наш человек счастлив только от хорошей погоды. */
form.onsubmit = function (e) {
	e.preventDefault();

	let name = form.elements.name.value;
	let cat = form.elements.cat.value;
	let rest = form.elements.rest.value;
	let money = form.elements.money.value;

	const person = new Person (form.elements.name.value);

	if (cat === 'yes') {
		person.hasCat()
	}
	if (rest === 'yes') {
		person.hasRest()
	} 
	if (money === 'yes') {
		person.hasMoney()
	} 
	person.isSunny();

	let personName = document.querySelector('.personName');
	let icon = document.querySelector('.icon');

	personName.innerHTML = person.name+ ': ';

	if (person.happiness == 4) {
		icon.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/grinning-face-with-smiling-eyes_1f604.png" alt="happy">';
	}
	else if (person.happiness == 3 || happiness == 2) {
		icon.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/neutral-face_1f610.png" alt="normal">';
	}
	else {
		icon.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/frowning-face_2639-fe0f.png" alt="sad">';
	}
}
}
