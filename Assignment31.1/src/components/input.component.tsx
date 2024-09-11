import React from 'react';

export interface LabeledInputProps {
    value: any;
    id: string;
    onUpdate: (value: any, id: string) => void;
    label?: string;
    type?: string;
    placeholder?: string;
    errorClass?: string;
    error?: string;  
    componentBuilder?: any;
}

export const LabeledInput = ({
    value,
    id,
    onUpdate,
    label = id,
    componentBuilder,
    placeholder = label,
    type = "text",
    error,
    errorClass = "text-danger",
}: LabeledInputProps) => {

    const handleUpdate = (e: any) => {
        onUpdate(e.target.value, id);
    }

    let _props = {
        value,
        id,
        onChange: handleUpdate,
        placeholder,
        type,
        className: `form-control`,
    }

    return (
        <div className="mb-3">
            <div className={`input-group ${error ? 'is-invalid' : ''}`}>
                <span className="input-group-text">{label}</span>
                {componentBuilder ? componentBuilder(_props) : <input {..._props} />}
            </div>
            {error && <div className={errorClass}>{error}</div>} 
        </div>
    );
}

export const TextArea = (props: any) => (
    <textarea {...props}>
    </textarea>
);
