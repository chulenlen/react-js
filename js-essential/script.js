const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Desctructuring
/*
const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

// Desctructuring Object
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// Desctructuring Arrays
// const primaryGenre = genres[0];
// const secondGenre = genres[1];

// console.log(primaryGenre, secondGenre);

// Rest operator with arrays
const [primary, secondary, ...otherGenres] = genres;
console.log(primary, secondary, otherGenres);

// Spread operator with arrays
const newGenres = [...genres, 'epic fantasy'];
console.log(newGenres);

// Spread operator with object
const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: '2001-12-19',
  // Overwriting an existing property
  pages: 1210,
};
console.log(updatedBook);

// Arrow Functions

// // old function
// function getYear(str) {
//   return str.split('-')[0];
// }

const getYear = (str) => str.split('-')[0];
// No need to put return and {} for one liner code

console.log(getYear(publicationDate));

// Template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)} The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`;
console.log(summary);

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
console.log(pagesRange);
console.log(`The book has ${pagesRange} pages`);

// Short Circutting
console.log(true && 'Some String');
console.log(false && 'No string');
console.log(hasMovieAdaptation && 'This book has a movie');

// AND && Operator
// falsy values: 0, '', null, undefined, NaN, false
console.log('Jonas' && 'Some strings');
console.log(0 && 'Some String');

// OR || Operator
console.log(true || 'Some Strings');
console.log(false || 'Some String');

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';
console.log(spanishTranslation);

// console.log(book.reviews.librarything.reviewsCount);

// const countWrong = book.reviews.librarything.reviewsCount || 'no data';
// console.log(countWrong);

// const count = book.reviews.librarything.reviewsCount ?? 'no data';
// // Nullish coalescing operator (??)
// console.log(count);

// Optional Chaining
const getTotalReviewCount = (book) => {
  const goodReads = book.reviews?.goodreads?.reviewsCount;
  const libraryAnything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + libraryAnything;
};


console.log(getTotalReviewCount(book));
*/

/*
const getTotalReviewCount = (book) => {
  const goodReads = book.reviews?.goodreads?.reviewsCount;
  const libraryAnything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + libraryAnything;
};
// Map Array Method
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
const author = books.map((author) => author.author);
console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
// adding the parentheses before curly braces its automatically return

console.log(essentialData);

// Filter Array Method
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books
  .filter((books) => books.genres.includes('adventure'))
  .map((book) => book.title);

console.log(adventureBooks);

// Reduce Array Method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

// Sort Array Method
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
// always put a slice method so it wont mutate the original array
console.log(sorted);
console.log(arr);

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

// Working with immutable arrays

// 1. Add book object to array
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2. Delete a book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3. Update the book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
console.log(booksAfterUpdate);
*/

// Asynchronous Javascript : Promises

/*
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data));
  
*/

console.log('jonas');

// Asynchronous Javascript: Async/Await

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
}

getTodos();

console.log('jonas2');
