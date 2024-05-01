// @flow
import * as React from 'react';
import {PrimaryButton} from "./PrimaryButton";



type Props = {

};

export function QuickPresentation(props: Props) {
    return (
        <div className="container-presentation" id="accueil">
            <div className="presentation-name">
                <h1 className="title-name">Hello, <br />je suis India CABO !</h1>
                <p className="personal-presentation">
                En deuxième année de BUT Informatique à l’Université Sorbonne Paris Nord, 
                je suis très intéressée par l'informatique, le design numérique et leurs différents métiers.
                J’aimerais ainsi les tester au cours de mes futurs stages et alternances. 
                </p>
                <br /><br /><br />
                {/* <button className='download-cv'><a href="CV_India_CABO.pdf">Télécharger CV</a></button> */}
                <PrimaryButton color="#54B717" text="Télécharger CV" link="../CV_India_CABO.pdf"/>
            </div>
            <div className="container-photo-me">
                <img src="../moi.png" alt="moi" />
            </div>
        </div>
    );
}