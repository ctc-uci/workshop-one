import React from 'react';
import './App.css';
import Nav from './app/components/navbar/Nav.js';
import Home from './app/views/home/Home.js';
import About from './app/views/about/About.js';
import Projects from './app/views/projects/Projects.js';
import ContactUs from './app/views/contact-us/ContactUs.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={ContactUs} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
