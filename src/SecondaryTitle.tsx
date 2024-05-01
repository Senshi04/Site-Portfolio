import React from 'react'

type Props = {
    text: string;    // Use text for better naming
};


export function SecondaryTitle (props: Props){

    return (
        <div className='container-secondary-title'>
            <p className='seconday-title'>{props.text}</p>
        </div>
    );
}