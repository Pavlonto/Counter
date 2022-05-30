import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import Setting from "./Setting";


function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    function start () {
        let newValue = minValue + 1;
        setMinValue(newValue)
        if(minValue === maxValue) {
            return
        }
    }
    return (
        <div className={"App"}>
            <Counter minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} start={start}/>
            <Setting minValue={minValue} maxValue={maxValue} setMinValue={setMinValue} setMaxValue={setMaxValue}/>
        </div>)
}

export default App;
