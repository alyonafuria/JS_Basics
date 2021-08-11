let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

const container = document.querySelector('main');
container.style.padding = '2rem';

crypto.forEach(currency => {
  const myElement = document.createElement('div');
  myElement.style.paddingBottom = '2rem';

  const myName = document.createElement('h2');
  myName.textContent = currency.name;
  myName.style.fontSize = '3rem';
  myName.style.fontFamily = 'Helvetica';

  const myPrice = document.createElement('h3');
  myPrice.textContent = currency.price;
  myPrice.style.fontSize = '1.5rem';
  myPrice.style.fontFamily = 'Helvetica';

  const myGraph = document.createElement('div');
  myGraph.classList.add('colors');
  myGraph.style.height = '5vh';
  myGraph.style.width = currency.price / 5 + "px";
  myGraph.style.backgroundColor = 'red';

  const colors = document.querySelectorAll('.colors');
  console.log(colors);
  //colors[1].style.backgroundColor = 'blue';

  container.append(myElement);
  myElement.append(myName);
  myElement.append(myPrice);
  myElement.append(myGraph);
});

