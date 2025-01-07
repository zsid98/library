const myLibrary = [];

function Book() {
    // Constructor
}

function addBookToLibrary(title, author, pages, year) {
    const book = new Book ();
    book.title = title;
    book.author= author;
    book.pages = pages;
    book.year = year;
    myLibrary.push(book);
}

addBookToLibrary('Hangsaman', 'Shirley Jackson', 191, 1951);
addBookToLibrary('Catch-22', 'Joseph Heller', 453, 1961);

function displayBooks() {
    for (let item in myLibrary) {
        let currentObject = myLibrary[item];
        
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

        let status = document.createElement('div');
        status.className = 'status';
        status.textContent = 'Read';

        pagesYear.append(bookPages, bookYear);
        bookChild.append(titleAuthor, pagesYear, status);
        bookParent.append(bookChild);        
    }
}

displayBooks();