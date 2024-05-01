import * as React from 'react';


type Props = {
    type: string,
    date: string,
    title: string,
    desc: string
};

export function Card(props: Props) {
    return (
        <article className='container-card'>
            <div className="card-image">
                <div className="card-type">
                    {props.type}    
                </div>
            </div>
            <div className="container-card-desc">
                <p className="card-date">
                    {props.date}
                </p>
                <h3 className='card-title'>{props.title}</h3>
                <p className='card-desc'>{props.desc}</p>
            </div>
            <div className="container-card-see-more">
                <div className="card-see-more">
                    <p>Voir</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                    </svg>
                </div>
            </div>
        </article> 
    );
}