import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    function start() {
        let newValue = minValue + 1;
        setMinValue(newValue)
    }

    return (
        <div className={"App"}>
            <Counter minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue}
                     start={start}/>

        </div>)
}

export default App;
