import React from 'react'
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Documentation } from './pages/Documentation';

function App() {
  return (
    <React.Fragment>
      <Router basename = {process.env.PUBLIC_URL}>
        <NavigationBar />
        <Switch>
          <Route exact path="/#/" component={Home} />
          <Route path="/#/contactUs" component={ContactUs} />
          <Route path="/#/docs" component={Documentation} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
