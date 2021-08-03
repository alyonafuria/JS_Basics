let totalCash = parseFloat(prompt("how much cash you got?", "10000$"));
let watchesCount = parseFloat(prompt("how many watches you gonna buy?", "5"));
let earringsCount = parseFloat(prompt("how many earrings you gonna buy?", "10"));
let watchesSum = parseFloat(prompt("how much these watches cost?", "500$")) * watchesCount;
let earringsSum = parseFloat(prompt("how much these earrings cost?", "50$")) * earringsCount;

function haveEnough (totalCash, watchesSum, earringsSum) {
document.write(totalCash >= (watchesSum + earringsSum) ? 'Enough $$$' : 'Not enough $$$')
}

haveEnough();