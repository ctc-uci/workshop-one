import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './app/components/Navbar/Nav';
import Home from './app/views/home/Home';
import About from './app/views/about/About';
import Projects from './app/views/projects/Projects';
import ContactUs from './app/views/contact-us/ContactUs';
import Footer from './app/components/Footer/Footer';

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
      <Footer />
    </Router>

  );
}

export default App;
