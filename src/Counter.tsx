import React, {useState} from 'react';
import s from './Counter.module.css'
import b from './Button.module.css'
import {Button} from "./Button";
import Setting from "./Setting";

type CounterType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    start: () => void
}

export const Counter = (props: CounterType) => {

    let [settingMode, setSettingMode] = useState(false)
    const valueDiv = settingMode ? <span className={s.span}>Enter value and click "Set"</span> : props.minValue
    &&
    props.minValue > props.maxValue ? <span className={s.span}>Incorrect value</span> : props.minValue

    function updateSettingMode(value: boolean) {
        setSettingMode(value)
    }


    return (
        <div className={s.counter}>
            <div className={props.minValue === props.maxValue ? s.value + ' ' + s.maxValue : s.value}>{valueDiv}</div>
            <div className={s.buttons}>
                <Button classname={b.button} disabled={settingMode || props.minValue === props.maxValue} onClick={props.start}
                        name={"Inc"}/>
                <Button classname={b.button} disabled={settingMode} onClick={() => props.setMinValue(0)} name={"Reset"}/>
            </div>
            <Setting minValue={props.minValue} maxValue={props.maxValue} setMinValue={props.setMinValue}
                     setMaxValue={props.setMaxValue} settingMode={settingMode} updateSettingMode={updateSettingMode}
            />
        </div>
    )
}