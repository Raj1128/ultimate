import React, { useState } from 'react';

const OnMessage = () => <span>The machine is ON!</span>

const OffMessage = () => <span>The machine is OFF!</span>

const Onoff = ({isOn}) => {
    if (isOn) {
        return <OnMessage />;
    }else{
        return <OffMessage />;
    }
}

const UltimateMachine = () => {
    const [isOn, setIsOn] = useState(false)

    const onClickeHander = () => {
        setIsOn(i => !i)
    };


    return (
        <section>
            <h1>The Ultimate Machine</h1>
            {isOn ? <OnMessage /> : <OffMessage />}
            <Onoff isOn={isOn} />
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