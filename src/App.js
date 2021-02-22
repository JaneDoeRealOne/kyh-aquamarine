import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Educations from './components/pages/Educations';
import Faq from './components/pages/Faq';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import News from './components/pages/News';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/home' component={Home} />
        <Route path='/educations' component={Educations} />
        <Route path='/faq' component={Faq} />
        <Route path='/news' component={News} />
        <Route path='/login' component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}



export default App;
