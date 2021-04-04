import React from 'react'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {ContactUs} from './pages/ContactUs';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Documentation } from './pages/Documentation';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/docs" component={Documentation} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
