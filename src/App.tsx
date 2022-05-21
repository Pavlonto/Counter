import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

export type ValueType = number


function App() {
    const [value, setValue] = useState<ValueType>(0)
    function start () {
        let newValue = value + 1;
        setValue(newValue)
        if(value > 4) {
            setValue(5)
        }
    }
    return (
        <div className={"App"}>
            <Counter value={value} setValue={setValue} start={start}/>
        </div>)
}

export default App;
