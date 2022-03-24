import React from 'react';
import './App.css';

export default function TextBox(props : {
    label : string,
    change : React.Dispatch<React.SetStateAction<string>>}) {

    return (
        <div>
            {props.label}:
            <input type={"text"} onChange={event => props.change(event.target.value)}/>
        </div>
    );
}