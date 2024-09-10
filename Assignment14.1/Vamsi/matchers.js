//Filters an array of books based on specified conditions, returning true if
// any of the conditions match. This function is designed to implement "Or"
// functionality, where at least one of the provided conditions must be satisfied
// for the book to be included in the result.

// let booksContainOr = _books.filter(
//       findByOr({
//          author: contains("Vivek"),  // Check if the author contains "Vivek"
//          price: lt(500),             // Check if the price is less than 500
//          rating: between(4, 4.5),    // Check if the rating is between 4 and 4.5
//       })
// );


// // groupBy(keySelector, aggregators);
// let groupByAuthor = _books.groupBy((book) => book.author, {
//   sum: (book) => book.price,
//   avg: (book) => book.rating,
//   min: (book) => book.price,
//   max: (book) => book.rating,
// });

// console.log("Group By: ", groupByAuthor);

function findByOr(object) {
  return (bookItem) => {
    for (let key in object) {
      const condition = object[key];
      if (typeof condition === "function") {
        const result = condition(bookItem[key]);
        if (result !== undefined && result !== false) return true;
      } else {
        if (bookItem[key] === object[key]) return true;
      }
    }
    return false;
  };
}


// List-js GroupBy function
groupBy(keySelector, aggregators = {}) {
  const groups = {};

  this.forEach((item) => {
    const key = keySelector(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
  });

  const result = {};

  for (let key in groups) {
    const items = groups[key];
    const aggregate = {};

    if (aggregators.sum) {
      aggregate.sum = items.reduce(
        (acc, item) => acc + aggregators.sum(item),
        0
      );
    }

    if (aggregators.avg) {
      aggregate.avg =
        items.reduce((acc, item) => acc + aggregators.avg(item), 0) /
        items.length;
    }

    if (aggregators.min) {
      aggregate.min = items.reduce(
        (acc, item) => Math.min(acc, aggregators.min(item)),
        Infinity
      );
    }

    if (aggregators.max) {
      aggregate.max = items.reduce(
        (acc, item) => Math.max(acc, aggregators.max(item)),
        -Infinity
      );
    }

    result[key] = aggregate;
  }

  return result;
}