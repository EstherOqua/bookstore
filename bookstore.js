const books = [
    {name: 'Queenie', author: 'Candice Carty-Williams', price: '£12.99', description: , image: , },
    {name: 'Love in Color', author: 'Bolu Babalola' price:'12.99'},
    {name: 'Americanah', author: price:},
    {name: 'Ghana Must Go', author: price:},
    {name: 'Half of a Yellow Sun', author: price:},
    {name: 'Welcome to Lagos', author: price:},
    {name: 'The Girl with the Louding Voice'author: price:},
    {name: 'Swing Time'author: price:},
    {name: 'I Know Why the caged bird sings',author: price:},
    {name: 'Harry Potter and the Philsophers Stone', author: 'J K Rowling', price:},
    {name: 'Harry Potter and Chamber of Secrets', author: 'J K Rowling', price:},
    {name: 'Harry Potter and Prisoner of Azkaban', author:'J K Rowling', price:},
    {name: 'Harry Potter and the Order of Phoenix', author: 'J K Rowling',  price:},
    {name: 'Harry Potter and the Half-Blood Prince', author: 'J K Rowling',  price:},
    {name: 'Harry Potter and the Deathly Hollow', author: 'J K Rowling', price:},
    {name: 'The Chronicles of Narnia', author: 'C.S Lewis' price:},
    {name: 'Wuthering Heights', author:'Emily Bronte' price:}
  
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

