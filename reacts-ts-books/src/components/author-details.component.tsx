import React from 'react';

interface Author {
    id: string;
    name: string;
    biography:string;
    photo:string;
    tags: string[] ;
}

interface AuthorDetailsProps{
    author: Author | null,
    onAuthorDelete?: (id:string)=>void;
}

export const AuthorDetails=({author,onAuthorDelete}:AuthorDetailsProps)=>{

    if(!author)
        return <h2>Select An Author</h2>

    

    return (
        <div className='row g-0 p-2'>
           <h2 className='col-12'>{author.name}</h2>

            <p className='col-8'>{author.biography}</p>

            <div className='col-4'>
                <img src={author.photo} alt=''  />
                <h6>Tags</h6>
                <ul className='tags'>
                    {author.tags.map(tag=>(<li key={author.id}># {tag}</li>))}

                </ul>
            </div>
            

            


           {
            onAuthorDelete &&
            <button 
                onClick={()=>onAuthorDelete(author.id)}
                className='btn btn-danger col-2'
            >Delete</button>
           }
        </div>
    )
}



