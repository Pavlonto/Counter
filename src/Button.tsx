import React from 'react';
import s from "./Button.module.css";

type ButtonType = {
    disabled: boolean
    onClick: () => void
    name: string
}

export const Button = (props: ButtonType) => {
    return (
        <button className={s.button} disabled={props.disabled} onClick={props.onClick}>{props.name}</button>
    );
};