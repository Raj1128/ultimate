import React from 'react'

const Application = () => {
    return (
        <form>
            <label htmlFor='recordName'>Record name </label>
            <input id='recordName' name='recordName'></input>
            <label htmlFor='artistName'> Artist name</label>
            <input id='artistName' name="artistName" />
            <label htmlFor='description'> Description</label>
            <input id='description' name="description" />
            <textarea id='description'name='description'/>
            <button type='submit'> Add</button>
        </form>
    )
}

export default Application