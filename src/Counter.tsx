import React from 'react';
import s from './Counter.module.css'
import {ValueType} from "./App";
import {Button} from "./Button";

type CounterType = {
    value: ValueType
    setValue: (value: ValueType) => void
    start: () => void
}

export const Counter = (props: CounterType) => {

    return (
        <div className={s.counter}>
            <div className={props.value > 4 ? s.valueFive : s.value}>{props.value}</div>
            <div className={s.btns}>
                <Button config={props.value > 4} onClick={props.start} title={props.value > 0 ? "Add" : "Start"}/>
                <Button config={props.value === 0} onClick={() => props.setValue(0)} title={"Reset"}/>
            </div>
            <hr/>
        </div>
    )
}