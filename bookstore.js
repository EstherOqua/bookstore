const books = [
    {name: 'Queenie', author: 'Candice Carty-Williams', price: '£12.99', description: , image: , },
    {name: 'Love in Color', author: 'Bolu Babalola' price:'12.99'},
    {name: 'Welcome to Lagos', author: price:},
    {name: 'Ghana Must Go', author: price:},
    {name: 'Americanah', author: price:},
    {name: 'Half of a yellow sun', author: price:},
    {name: author: price:}
  
  ];

const x = document.querySelector('#clickMe');
const y = document.querySelector('#hovering');

x.addEventListener('click', respondClick);
y.addEventListener('mouseover', respondMouseOver);
y.addEventListener('mouseout', respondMouseOut);

function respondMouseOver() {
  document.querySelector('#effect').innerHTML += 'MouseOver Event' + '<br>';
}

function respondMouseOut() {
  document.querySelector('#effect').innerHTML += 'MouseOut Event' + '<br>';
}

function respondClick() {
  document.querySelector('#effect').innerHTML += 'Click Event' + '<br>';
}

