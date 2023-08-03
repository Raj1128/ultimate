import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onFirstNameChangeHandler = e => {
        setFirstName(e.target.value);
    };
    const onLastNameChangeHandler = e => {
        setLastName(e.target.value);
    };


    return (
        <Form>
            <span>{firstName} </span>
            
            <label htmlFor='firstName'>First nmae</label>
            <input
                id='firstName'
                onChange={onFirstNameChangeHandler}
                value={firstName}
            >
            </input>

            <label htmlFor='lastName'>Last nmae</label>
            <input
                id='lasttName'
                onChange={onLastNameChangeHandler}
                value={lastNametName}
            >
            </input>

        </Form>
    );
};

export default Form