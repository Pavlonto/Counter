import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import s from './Setting.module.css'
import b from './Button.module.css'

type SettingType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    settingMode: boolean
    updateSettingMode: (value: boolean) => void
}

const Setting = (props: SettingType) => {

    let [minValue, setMinValue] = useState(props.minValue)
    let [maxValue, setMaxValue] = useState(props.maxValue)

    function onChangeMinHandler(event: ChangeEvent<HTMLInputElement>) {
        props.updateSettingMode(true)
        setMinValue(Number(event.currentTarget.value))
    }
    function onChangeMaxHandler(event: ChangeEvent<HTMLInputElement>) {
        props.updateSettingMode(true)
        setMaxValue(Number(event.currentTarget.value))
    }
    function onClickHandler() {
        props.updateSettingMode(false)
        props.setMinValue(minValue)
        props.setMaxValue(maxValue)
    }

    return (
        <div className={s.setting}>
            <div>
                <span>Max value:</span>
                <input className={s.max} type="number" value={maxValue} onChange={onChangeMaxHandler}/>
            </div>
            <div>
                <span>Min value: </span>
                <input  className={s.min} type="number" value={minValue} onChange={onChangeMinHandler}/>
            </div>
            <Button disabled={!props.settingMode} onClick={onClickHandler} name={"Set"} classname={b.buttonSet}/>
        </div>
    );
};

export default Setting;