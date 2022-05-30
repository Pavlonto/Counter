import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import s from './Setting.module.css'

type SettingType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
}

const Setting = (props: SettingType) => {

    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)

    function onChangeMinHandler(event: ChangeEvent<HTMLInputElement>) {
        setMinValue(Number(event.currentTarget.value))
    }
    function onChangeMaxHandler(event: ChangeEvent<HTMLInputElement>) {
        setMaxValue(Number(event.currentTarget.value))
    }
    function onClickHandler() {
        props.setMinValue(Number(minValue))
        props.setMaxValue(Number(maxValue))
    }

    return (
        <div className={s.setting}>
            <div><input type="number" value={maxValue} onChange={onChangeMaxHandler}/></div>
            <div><input type="number" value={minValue} onChange={onChangeMinHandler}/></div>
            <Button disabled={false} onClick={onClickHandler} name={"Set"}/>
        </div>
    );
};

export default Setting;