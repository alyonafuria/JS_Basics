const form = document.forms[0];
const insert = document.querySelector('.total');

form.onsubmit = function(e) {
	e.preventDefault();
	insert.innerHTML = Math.sin(form.elements.angle.value);
}
