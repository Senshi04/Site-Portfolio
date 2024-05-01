import React from 'react'

type Props = {
    inside : boolean,
    date : string,
    titre : string,
    text : string,
    icon? : string
};


export function Timeline (props: Props){
    const getBoxShadow = () => {
        if (props.inside) {
          return "4px 5px 10px -3px rgba(0,0,0,0.1),-4px -4px 10px -2px #FFF";
        } else {
          return "4px 5px 5px 2px rgba(0,0,0,0.1), -10px -10px 15px -3px #FFF, inset 3px 6px 15px -3px rgba(0,0,0,0.1), inset -7px -7px 15px 0 #fff;";
        }
      }
    
    return (
        <div>
            <div className="dateContainer">

            </div>
        </div>
    );
}