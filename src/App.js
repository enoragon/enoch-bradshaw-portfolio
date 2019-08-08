import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import Work from './pages/Work';
import Art from './pages/Art';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Work' component={Work} />
              <Route exact path='/Art' component={Art} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Contact' component={Contact} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
