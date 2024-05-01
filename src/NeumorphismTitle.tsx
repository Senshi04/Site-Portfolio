import React from 'react'

type Props = {
    text: string;
};


export function NeumorphismTitle (props: Props){
    return (
        <div className='container-neumorphism-title'>
            <div className="neumorphism-title">
                <h1 className='title'>{props.text}</h1>
            </div>
        </div>
    );
}