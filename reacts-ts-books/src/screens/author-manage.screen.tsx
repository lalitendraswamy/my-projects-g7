import React from 'react';
import { AuthorList } from '../components/author-list.component';
import { AuthorDetails } from '../components/author-details.component';



  interface Author {
    id: string;
    name: string;
    biography:string;
    photo:string;
    tags: string[] ;
}

interface AuthorScreenProps{
  authors:Author[];
  handleAuthorDelete: (id:string)=>void;
  selectedAuthor: Author|null;
  setSelectedAuthor: (author:Author)=>void;

}



export const AuthorManageScreen = ({authors,handleAuthorDelete,selectedAuthor,setSelectedAuthor}: AuthorScreenProps) => {

    

    return (
        <div className='row g-0'>
            <div className='col col-5 author-list'>
                <AuthorList authors={authors} onAuthorSelect={author=>setSelectedAuthor(author)} />
            </div>
            <div className='col col-7  author-details'>
                <AuthorDetails 
                        author={selectedAuthor} 
                        onAuthorDelete={handleAuthorDelete}    
                    />
            </div>
        </div>
    );

}

