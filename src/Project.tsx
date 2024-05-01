import { Card } from './Card';

type Props = {

};

export function Project(props: Props) {
    return (
        <section className="project">
            <nav className="project-nav-links">
                <ul className="nav-links">
                    <li className="nav-link" id="clicked">Tout</li>
                    <li className="nav-link">Figma</li>
                    <li className="nav-link">Pages Web</li>
                    <li className="nav-link">Python</li>
                    <li className="nav-link">Java</li>
                    <li className="nav-link">Affiche</li>
                    <li className="nav-link">Autres</li>
                </ul>
            </nav>
            <div className="cards">
                <Card 
                    type="Figma" 
                    title="Projet 1" 
                    date="2023" 
                    desc="muahaha"
                />
            </div>
        </section>
    );
}