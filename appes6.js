class Book{
    constructor(title, author, isbn){
        this.title=title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{

    addBooktoList(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</td>
        `;
        list.appendChild(row);

    }

    deleteBook(target){

        if(target.className === 'delete'){
        
            target.parentElement.parentElement.remove();
            
        }

    }

    clearFields(){

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }

    showAlert(message, className){
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
            ui.showAlert('Successfully', 'success')
            ui.addBooktoList(book);

            ui.clearFields()
        }          
        e.preventDefault()
})


const bookList = document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Successfully deleted', 'success')
    e.preventDefault();
})