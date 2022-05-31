import React from 'react';

type ButtonType = {
    disabled?: boolean
    onClick: () => void
    name: string
    classname?: string
}

export const Button = (props: ButtonType) => {
    return (
        <button className={props.classname} disabled={props.disabled} onClick={props.onClick}>{props.name}</button>
    );
};