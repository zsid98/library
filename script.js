const myLibrary = [];

function Book(title, author, pages, year, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.status = status || "unread"; // Default status

    this.toggleStatus = function () {
        this.status = this.status === "read" ? "unread" : "read";
    };
}

function addBookToLibrary(title, author, pages, year, status) {
    const newBook = new Book(title, author, pages, year, status);
    myLibrary.push(newBook);
    renderBook(newBook, myLibrary.length - 1);
}


function refreshLibrary() {
    const bookParent = document.querySelector(".books");
    bookParent.innerHTML = "";
    myLibrary.forEach((book, index) => renderBook(book, index));
}

function toggleBookStatus(index) {
    myLibrary[index].toggleStatus();
    refreshLibrary();
}

function removeBook(index) {
    if (!confirm("Do you want to remove this book from your library?")) return;
    
    myLibrary.splice(index, 1);
    refreshLibrary();
}

function renderBook(book, index) {
    const bookParent = document.querySelector(".books");

    const bookChild = document.createElement("div");
    bookChild.className = "book";
    bookChild.dataset.index = index;
    bookChild.dataset.stat = book.status;

    bookChild.innerHTML = `
        <div class="title-author">
            <div class="book-title">${book.title}</div>
            <div class="book-author">By ${book.author}</div>
        </div>
        <div class="pages-year">
            <div class="book-pages">${book.pages} pages</div>
            <div class="book-year">${book.year}</div>
        </div>
        <div class="status ${book.status === "read" ? "read" : "unread"}"></div>

        <div class="remove-btn">❌</div>
    `;   

    bookChild.querySelector(".status").addEventListener("click", () => toggleBookStatus(index));
    bookChild.querySelector(".remove-btn").addEventListener("click", () => removeBook(index));
   
    bookParent.appendChild(bookChild);
}


// Handle form
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const title  = document.getElementById("form-title").value.trim();
    const author = document.getElementById("form-author").value.trim();
    const pages  = parseInt(document.getElementById("form-pages").value);
    const year   = parseInt(document.getElementById("form-year").value);
    const status = document.querySelector("input[name='read-status']:checked").value;

    if (!title || !author || isNaN(pages) || isNaN(year)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    addBookToLibrary(title, author, pages, year, status);
    event.target.reset();

})