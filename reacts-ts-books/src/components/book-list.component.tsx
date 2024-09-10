import React from 'react'

interface Review {
  reviewer: string;
  review: string;
  rating:number;
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

interface BookListProps{
  books:Book[];
  onBookSelect:(book:Book)=>void;
}

export const  BookList=(props:BookListProps)=> {
  return (
    <div className='list-group'>
            {props.books.map(book=>(
              <button key={book.id} 
              onClick={()=>props.onBookSelect(book)}
              className="list-group-item list-group-item-action"
              >{book.title}</button>
            ))}
        </div>
  )
}
