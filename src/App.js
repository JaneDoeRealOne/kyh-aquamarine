import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import Navbar from './components/Navbar';
import './App.css';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Educations from './components/pages/Educations';
import Faq from './components/pages/Faq';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import News from './components/pages/News';
import PrivateRoute from './components/routes/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Landing} />
          <PrivateRoute path='/home' component={Home} />
          <Route path='/educations' component={Educations} />
          <Route path='/faq' component={Faq} />
          <Route path='/news' component={News} />
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}



export default App;
