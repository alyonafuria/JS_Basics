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
class angryTiger extends Tiger {
	throwDart() {
		return 'ZzZzzZzZz';
	}
}

//Экземпляр
const Bart = new angryTiger ('Bart');
console.log(Bart.throwDart());