const myLibrary = [];

function Book() {
    // Constructor
}

function addBookToLibrary() {
    const book = new Book ();

    let formTitle = document.getElementById("form-title");
    let formAuthor = document.getElementById("form-author");
    let formPages = document.getElementById("form-pages");
    let formYear = document.getElementById("form-year");

    if (formTitle.value.trim() === "" ||
        formAuthor.value.trim() === "" ||
        formPages.value.trim() === "" ||
        formYear.value.trim() === "") {
            alert("Fill out all fields");
            return;
    }

    let radioButtons = document.querySelectorAll("input[name='read-status']");
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            book.status = radioButton.value;
            break;
        }
    }

    book.title = formTitle.value;    
    book.author= formAuthor.value;
    book.pages = formPages.value;
    book.year = formYear.value;
    formYear.value = "";

    myLibrary.push(book);
    
    formTitle.value="";
    formAuthor.value="";
    formPages.value="";
    formPages.year="";
}

function refreshLibrary() {
    const allBooks = document.querySelector(".books");
    allBooks.innerHTML = "";
}

function displayBooks() {
    addBookToLibrary();

    for (let item in myLibrary) {
        let currentObject = myLibrary[item];
        currentObject.id = item;

        let bookParent = document.querySelector('.books');
        let bookChild = document.createElement('div');
        bookChild.className = 'book';

        let titleAuthor = document.createElement('div');
        titleAuthor.className = 'title-author';

        let bookTitle = document.createElement('div');
        bookTitle.className = 'book-title';
        bookTitle.textContent = currentObject.title;
        
        let bookAuthor = document.createElement('div');
        bookAuthor.className = 'book-author';
        bookAuthor.textContent = `By ${currentObject.author}`;

        titleAuthor.append(bookTitle, bookAuthor);

        let pagesYear = document.createElement('div');
        pagesYear.className = 'pages-year';

        let bookPages = document.createElement('div');
        bookPages.className = 'book-pages';
        bookPages.textContent = `${currentObject.pages} pages`;
        
        let bookYear = document.createElement('div');
        bookYear.className = 'book-year';
        bookYear.textContent = currentObject.year;

        pagesYear.append(bookPages, bookYear);

        let status = document.createElement('div');
        status.className = 'status';

        if (currentObject.status === "read") {
            status.classList.add("read");
            status.textContent = 'Read';
        } else if (currentObject.status === "unread") {
            status.classList.add("unread");
            status.textContent = 'Not Read Yet';
        }
        
        let removeBtn = document.createElement('div');
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "❌";
        
        bookChild.append(titleAuthor, pagesYear, status, removeBtn);
        bookParent.append(bookChild); 
    }
}

let addBtn = document.querySelector(".add");

addBtn.addEventListener('click', () => {
    refreshLibrary();
    event.preventDefault();
    displayBooks();
    document.querySelector('form').reset;

})