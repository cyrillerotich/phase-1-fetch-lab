
// renderBooks()
// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
  
// }
function fetchBooks(){
  fetch("https://anapioficeandfire.com/api/books")
.then( function(response){
  return response.json(); 
})
.then(function(data){
  console.log(data);
  renderBooks(data);
})

};

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerText= book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
 fetchBooks()
});

