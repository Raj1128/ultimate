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

    const getMessage = () =>{
        if(isOn) {
        return <OnMessage />
        }else{
            return <OffMessage />
        }
    }

    // let message;
    // if (isOn){
    //     message = <OnMessage />
    // }else{
    //     message = <OffMessage />
    // }

    return (
        <section>
            <h1>The Ultimate Machine</h1>
            {getMessage()}
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