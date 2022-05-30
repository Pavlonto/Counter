import React from 'react';
import s from './Counter.module.css'
import {Button} from "./Button";

type CounterType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    start: () => void
}

export const Counter = (props: CounterType) => {

    const className = `${s.value} ${props.minValue === props.maxValue ? s.maxValue : ''}`

    return (
        <div className={s.counter}>
            <div className={className}>{props.minValue}</div>
            <div className={s.buttons}>
                <Button disabled={props.minValue === props.maxValue} onClick={props.start} name={"Inc"}/>
                <Button disabled={props.minValue === 0} onClick={() => props.setMinValue(0)} name={"Reset"}/>
            </div>
        </div>
    )
}