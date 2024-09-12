import React, { Component, ChangeEvent, FormEvent } from 'react';

interface Props {
  addAuthor: (author: Author) => void;
  changeTab:(tab:string)=>void;
  setSelectedAuthor:(author:Author)=>void;
}

interface Author {
  id: string;
  name: string;
  photo: string;
  biography: string;
  tags: string[];
}



export class AddAuthorScreen extends Component<Props> {
  state = {
    name: '',
    photo: '',
    biography: '',
    tags: ''
  };

  handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ photo: event.target.value });
  };

  handleBiographyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ biography: event.target.value });
  };

  handleTagsChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ tags: event.target.value });
  };

  onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const { name, photo, biography, tags } = this.state;
    const tagsArr = tags.split(', ')
    const id = name.toLowerCase().replace(' ', '-');
    const author: Author = { id, name, photo, biography, tags: tagsArr };
    
    this.props.addAuthor(author);
    this.props.changeTab('authors');
    this.props.setSelectedAuthor(author);
  };

  render() {
    const { name, photo, biography, tags } = this.state;

    return (
      <div className='d-flex justify-content-center align-items-center add-author-screen'>
        <form className='w-50' onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Author Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.handleNameChange}
              placeholder="Enter author's name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo">Photo URL</label>
            <input
              type="url"
              className="form-control"
              id="photo"
              value={photo}
              onChange={this.handlePhotoChange}
              placeholder="Enter photo URL"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="biography">Biography</label>
            <textarea
              className="form-control"
              id="biography"
              value={biography}
              onChange={this.handleBiographyChange}
              placeholder="Enter biography"
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

          <button type="submit" className="btn btn-primary">Add Author</button>
        </form>
      </div>
    );
  }
}
