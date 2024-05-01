import React from 'react';
import './App.css';
import {Header} from "./Header";
import {QuickPresentation} from "./QuickPresentation";
import { PrimaryTitle } from './PrimaryTitle';
import { SecondaryTitle } from './SecondaryTitle';
import { Project } from './Project';
import { NeumorphismTitle } from './NeumorphismTitle';


function App() {
  return (
    <div className="App">
        <Header />
        <br /><br />
        <QuickPresentation />
        <br />
        <PrimaryTitle color="#FF81AE" text="PROJETS" />
        <SecondaryTitle text="Découvrez les différents projets que j’ai pu faire" />
        <Project />
        <PrimaryTitle color="#54B717" text="SKILLS" />
        <NeumorphismTitle text="HARD" />
        <img width="64" height="64" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-creativity-graph-design-kiranshastry-solid-kiranshastry.png" alt="external-creativity-graph-design-kiranshastry-solid-kiranshastry"/>
        {/* <SkillsCategory /> */}
        <NeumorphismTitle text="SOFT" />
        <PrimaryTitle color="#FF81AE" text="PARCOURS" />
        <SecondaryTitle text="Suivez cette frise chronologique pour en apprendre plus sur mon parcours" />
        
    </div>
  );
}

export default App;