import React from 'react';

interface Author {
    id: string;
    name: string;
    biography:string;
    photo:string;
    tags: string[] ;
}

interface AuthorListProps{
    authors: Author[],
    onAuthorSelect: (author: Author) => void
}

export const AuthorList=(props:AuthorListProps)=>{

    


    return (
        <div className='list-group'>
            {props.authors.map(author=>(
              <button key={author.id} 
              onClick={()=>props.onAuthorSelect(author)}
              className="list-group-item list-group-item-action"
              >{author.name}</button>
            ))}
        </div>
    )
}
