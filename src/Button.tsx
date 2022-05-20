import React from 'react';
import s from "./Button.module.css";

type ButtonType = {
    config: any
    onClick: () => void
    title: any
}

export const Button = (props: ButtonType) => {
    return (
        <button className={s.btn} disabled={props.config} onClick={props.onClick}>{props.title}</button>
    );
};