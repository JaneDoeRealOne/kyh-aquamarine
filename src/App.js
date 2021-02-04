import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Educations from './components/pages/Educations';
import Faq from './components/pages/Faq';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/educations' component={Educations} />
        <Route path='/faq' component={Faq} />
      </Switch>
    </Router>
  );
}

export default App;
