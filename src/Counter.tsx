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

    const className = `${s.value} ${props.value > 4 ? s.valueFive : ''}`

    return (
        <div className={s.counter}>
            <div className={className}>{props.value}</div>
            <div className={s.buttons}>
                <Button disabled={props.value > 4} onClick={props.start} name={props.value > 0 ? "Add" : "Start"}/>
                <Button disabled={props.value === 0} onClick={() => props.setValue(0)} name={"Reset"}/>
            </div>
        </div>
    )
}

// `${s.error} ${spanClassName ? spanClassName : ''}`