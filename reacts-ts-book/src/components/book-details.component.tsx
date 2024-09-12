import React from "react";

interface Review {
  reviewer: string;
  review: string;
  rating: number;
}

interface Book {
  id: string;
  title: string;
  author: string;
  cover: String;
  description: string;
  photo: string;
  tags: string[];
  reviews: Review[];
}

interface BookDetailsProps {
  book: Book | null;
  onBookDelete?: (id: string) => void;
}

export const BookDetails = ({ book,onBookDelete}: BookDetailsProps) => {
  if (!book) return <h2>Select An book</h2>;
  console.log('book',book)
  console.log('book.cover',book.cover)
  return (
    <div className="row g-0 p-2">
      <h2 className="col-12">{book.title}</h2>

      <p className="col-8">{book.description}</p>

      <div className="col-4">
        
        <img src={`${book.cover}`} alt='' />
        <h5>Author : {book.author}</h5>
        <h6>Tags</h6>
        <ul className="tags">
          {book.tags.map((tag) => (
            <li key={book.id}># {tag}</li>
          ))}
        </ul>
      </div>

      <div className="reviews">
          <h4>Reviews</h4>
          <ul className="review-list">
                {book.reviews.map(obj=>(
                    <li key={obj.review} >
                        <h5 className="fw-medium">{obj.reviewer}</h5>
                        <h6>Rating :{obj.rating}</h6>
                        <br/>
                        <p>Description <br/> {obj.review}</p>

                    </li>
                ))}
          </ul>
      </div>

      {onBookDelete && (
        <button
          onClick={() => onBookDelete(book.id)}
          className="btn btn-danger col-2"
        >
          Delete
        </button>
      )}
    </div>
  );
};
