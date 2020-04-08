import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Home } from './components/Home';
import { About } from './components/About';
import { Html } from './components/Html';
import { Header } from './components/Header';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Notfound } from './components/Notfound';






import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="Apps">
          <Header />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/html' component={Html} />
            <Route path='/contact' component={Contact} />
            <Redirect path="/dashboard" to="/about" />
            <Route path='*' component={Notfound} />

          </Switch>
          <Footer />
        </div>
      </Router>



    );
  }
}

export default App;


