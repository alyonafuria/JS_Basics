function randomMath (n = prompt('напиши число', '666')) {
	return Math.abs(n ** Math.floor(Math.random() * (9 - 1) + 1));
}
