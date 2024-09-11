import React, { useState, useEffect } from 'react';
import { LabeledInput, TextArea } from '../../components/input.component';
import { Author } from '../../services/author';
import { required, lengthRange, validateTags,validateURL } from '../../utils/validators';

export interface AuthorAddScreenProps { }

let dummyAuthor: Author = {
    name: "",
    id: "",
    biography: "",
    photo: "",
    tags: [],
}

export const AuthorAddScreen = (props: AuthorAddScreenProps) => {

    const [author, setAuthor] = useState(dummyAuthor);
    const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});

    const handleAuthorUpdate = (value: any, id: string) => {
        if (id === 'tags') {
            value = value.split(',')
        }
        setAuthor({
            ...author,
            [id]: value
        });
    }

    const validateForm = () => {
        const newErrors: { [key: string]: string | undefined } = {};
        
        newErrors.name = required()(author.name)?.message;
        newErrors.id = required()(author.id)?.message;
        newErrors.biography = lengthRange(10, 1000,"Biography must be between 10 and 1000 characters")(author.biography)?.message;
        newErrors.photo = validateURL("Incorrect Photo URL")(author.photo)?.message;
        newErrors.tags = validateTags()(author.tags)?.message;

        setErrors(newErrors);

        return Object.keys(newErrors).every(key => !newErrors[key]);
    };
    

    const handleSave = () => {
        if (validateForm()) {
            console.log('saving', author);
            
        }
    }

    return (
        <div className='AuthorAddScreenComponent'>
            <h2>Add New Author</h2>
            <hr />
            <div className="row">
                <div className="col-12">
                    <LabeledInput
                        id="name"
                        value={author.name}
                        onUpdate={handleAuthorUpdate}
                        error={errors.name}
                    />
                    <LabeledInput
                        id="id"
                        value={author.id}
                        onUpdate={handleAuthorUpdate}
                        error={errors.id}
                    />
                    <LabeledInput
                        id="photo"
                        value={author.photo}
                        onUpdate={handleAuthorUpdate}
                        error={errors.photo}
                    />
                    <LabeledInput
                        id="biography"
                        value={author.biography}
                        onUpdate={handleAuthorUpdate}
                        componentBuilder={(props: any) => <TextArea {...props} />}
                        error={errors.biography}
                    />
                    <LabeledInput
                        id="tags"
                        value={author.tags}
                        onUpdate={handleAuthorUpdate}
                        error={errors.tags}
                    />
                    <p />
                    <button
                        onClick={handleSave}
                        className='btn btn-primary form-control'
                    >
                        Add Author
                    </button>
                </div>
                <div className="col-6">
                </div>
            </div>
        </div>
    );
}
