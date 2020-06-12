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

//To validate
UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container'),
    form =document.querySelector('.book-form');
    container.insertBefore(div,form);
    setTimeout(() => {
        div.remove()
    }, 3000);
}

const form = document.querySelector('.book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

        const book = new Book(title,author,isbn);

        const ui = new UI();
        
        if(title == '' || author =='' || isbn == ''){
            ui.showAlert('Check again', 'error')
        }
        else{
            ui.addBooktoList(book);

            ui.clearFields()
        }          
        e.preventDefault()
})



//Add book to lise

//create tr element

//insert