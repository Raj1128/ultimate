import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const[firstName,setFirstName] = useState('')

const onChangeHandler = e =>{
    setFirstName(e.target.value);
};


  return (
   <Form>
    <span>{firstName} </span>
    <label htmlFor='firstName'>First nmae</label>
    <input id = 'firstName'
    onChange={onChangeHandler}
    value={firstName}
    >

    </input>
   </Form>
  );
};

export default Form