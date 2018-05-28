import { Switch, Route } from 'react-router-dom';

import CalorieCounter from './CalorieCounter';
import Resume from './Resume';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

import Preamble from './sections/Preamble';
import Skills from './sections/Skills';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const Main = () => {
  const sections = [{
    name: 'top',
    component: Header,
  }, {
    name: 'preamble',
    component: Preamble,
  }, {
    name: 'projects',
    icon: 'heart',
    iconActive: 'heart-o',
    component: Projects,
  }, {
    name: 'skills',
    icon: 'star',
    iconActive: 'star-o', // telepathy!
    component: Skills,
  }, {
    name: 'about',
    icon: 'user-circle',
    iconActive: 'user-circle-o',
    component: About,
  //}, {
  //  name: 'contact',
  //  icon: 'comment',
  //  iconActive: 'comment-o',
  //  component: Contact,
  }];
  return <Navigation sections={sections}>
    <Footer onToggleTerminal={() => {
      console.log('Open sesame');
    }}/>
  </Navigation>;
}

export class App extends React.Component {
  render() {
    return <div id="page">
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/beeralyzer' component={CalorieCounter}/>
        <Route exact path='/resume' component={Resume}/>
      </Switch>
    </div>;
  }
}
