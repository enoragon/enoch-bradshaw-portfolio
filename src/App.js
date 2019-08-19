import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Layout from './components/Layout/Layout';

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
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Work' component={Work} />
            <Route exact path='/Art' component={Art} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
