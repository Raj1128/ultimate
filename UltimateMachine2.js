import React, { useState } from 'react';

const ErrorMessage = () => <span>Oh noes you broke!</span>

const UltimateMachine = () => {
    const [showError, setshowError] = useState(false)

    const onClickeHander = () => {
        setshowError(i => !i)
    };


    return (
        <section>
            <h1>The Ultimate Machine</h1>
           {showError && <ErrorMessage />}
            <button
                type="button"
                onClick={onClickeHander}
                aria-pressed={isOn}
            >
                On off
            </button>
        </section>
    )
};





export default UltimateMachine; 