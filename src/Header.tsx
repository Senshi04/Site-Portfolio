// @flow
import * as React from 'react';

type Props = {

};

export function Header(props: Props) {
    return (
        <header>
            <div className="logo">
                <h1>IN<span>DIA</span></h1>
            </div>
            <nav className={"header-nav"}>
                <ul className={"header-links"}>
                    <li className={"header-link"} id={"accueil"}><a href={"#accueil"}>ACCUEIL</a></li>
                    <li className={"header-link"}><a href={"#projets"}>PROJETS</a></li>
                    <li className={"header-link"}><a href={"#skills"}>SKILLS</a></li>
                    <li className={"header-link"}><a href={"#parcours"}>PARCOURS</a></li>
                    <li className={"header-link"}><a href={"#aPropos"}>A PROPOS</a></li>
                </ul>

                <div className={"header-link"} id={"contactButton"}>
                    <a href={"#contact"}>CONTACT</a>
                </div>
            </nav>
        </header>
    );
}