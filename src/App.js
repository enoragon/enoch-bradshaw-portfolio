import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import Work from './pages/Work';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Work' component={Work} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
