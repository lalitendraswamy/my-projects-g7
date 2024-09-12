import React from "react";
import { BookList } from "../components/book-list.component";
import { BookDetails } from "../components/book-details.component";

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

interface BookScreenProps {
  books: Book[];
  selectedBook: Book | null;
  handleBookDelete: (id: string) => void;
  setSelectedBook: (book:Book)=>void
}

export const BookManagerScreen = ({
  books,
  selectedBook,
  handleBookDelete,
  setSelectedBook,
}: BookScreenProps) => {
  return (
    <div className="row g-0">
      <div className="col col-5 book-list">
        <BookList books={books} onBookSelect={book=>setSelectedBook(book)}/>
      </div>
      <div className="col col-7  book-details">
        <BookDetails book={selectedBook} onBookDelete={handleBookDelete} />
      </div>
    </div>
  );
};
