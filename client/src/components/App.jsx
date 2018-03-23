
import Navigation from './Navigation';
import Header from './Header';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import CalorieCounter from './CalorieCounter';
import Resume from './Resume';

import * as SkillsLib from '../lib/skills';

export class App extends React.Component {

  render() {
    return <div id="page">
      <CalorieCounter/>
      {/*
      <Resume />
      <Header />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Navigation />
      */}
    </div>;
  }
}
