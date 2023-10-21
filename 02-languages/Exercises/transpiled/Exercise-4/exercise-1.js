//READ BOOKS
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
function isBookRead(books, titleToSearch) {
    var searchBook = books.filter(function (book) { return book.title === titleToSearch; })[0];
    return (searchBook === null || searchBook === void 0 ? void 0 : searchBook.isRead) ? true : false;
}
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
