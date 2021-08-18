//класс
class Tiger {
	constructor(name) {
		this.name = name;
	}
	feedCat() {
		return 'Purrrrrr';
	}
}

//подкласс
class AngryTiger extends Tiger {
	throwDart() {
		return 'ZzZzzZzZz';
	}
}

//Экземпляр
const bart = new AngryTiger ('Bart');
console.log(bart.throwDart());