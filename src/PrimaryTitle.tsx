import React from 'react'

type Props = {
    color: string; // Make color optional (default behavior)
    text: string;    // Use text for better naming
};


export function PrimaryTitle (props: Props){
    const borderPrimaryTitle = {
        backgroundColor: props.color, // Direct access to prop value
    };

    return (
        <div className='container-primary-title'>
            <h1 className='primary-title'>{props.text}</h1>
            <span className='primary-title-border' style={borderPrimaryTitle}></span>
        </div>
    );
}