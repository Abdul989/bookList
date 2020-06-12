//initialise main th
function Book(title, author, isbn){
    this.title=title;
    this.author = author;
    this.isbn = isbn;
}

function UI(){
}

UI.prototype.addBooktoList = function(book){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#">X</td>
    `;
    list.appendChild(row);
    //console.log(book)
}

//Clear the fuields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

const form = document.querySelector('.book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

        const book = new Book(title,author,isbn);

        const ui = new UI();
        ui.addBooktoList(book);
        ui.clearFields()          
        e.preventDefault()
})



//Add book to lise

//create tr element

//insert