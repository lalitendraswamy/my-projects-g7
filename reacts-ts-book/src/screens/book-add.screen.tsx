import React, { Component, ChangeEvent, FormEvent } from 'react';


interface Review {
    reviewer: string;
    review: string;
    rating: number;    
  }


interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  tags: string[];
  reviews: Review[];
}

interface Props {
    addBook: (book: Book) => void;
    changeTab: (tab: string) => void;
    setSelectedBook: (book: Book) => void;
  }

export class AddBookScreen extends Component<Props> {
  state = {
    title: '',
    author: '',
    cover: '',
    description: '',
    tags: ''
  };

  handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: event.target.value });
  };

  handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ author: event.target.value });
  };

  handleCoverChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ cover: event.target.value });
  };

  handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ description: event.target.value });
  };

  handleTagsChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ tags: event.target.value });
  };

  onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const { title, author, cover, description, tags } = this.state;
    const tagsArr = tags.split(', ');
    const id = title.toLowerCase().replace(' ', '-');
    const reviews= [
        {
          reviewer: "Emily W.",
          review:
            "A magical beginning to the Harry Potter series. Rowling's world-building and character development are top-notch. A must-read for both kids and adults.",
          rating: 5,
        },
        {
          reviewer: "Michael T.",
          review:
            "Enchanting and imaginative. The perfect introduction to the wizarding world. Rowling’s storytelling is engaging and memorable.",
          rating: 4,
        },
      ]
    const book: Book = { id, title, author, cover, description, tags: tagsArr ,reviews};

    this.props.addBook(book);
    this.props.changeTab('books');
    this.props.setSelectedBook(book);
  };

  render() {
    const { title, author, cover, description, tags } = this.state;

    return (
      <div className='d-flex justify-content-center align-items-center add-book-screen'>
        <form className='w-50' onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleTitleChange}
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={author}
              onChange={this.handleAuthorChange}
              placeholder="Enter author's name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cover">Cover URL</label>
            <input
              type="url"
              className="form-control"
              id="cover"
              value={cover}
              onChange={this.handleCoverChange}
              placeholder="Enter cover URL"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={this.handleDescriptionChange}
              placeholder="Enter description"
              rows={5}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              className="form-control"
              id="tags"
              value={tags}
              onChange={this.handleTagsChange}
              placeholder="Enter tags (comma separated)"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
      </div>
    );
  }
}
