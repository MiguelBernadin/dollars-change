import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import CurrencyConverter from './components/CurrencyConverter';

function App() {

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/currencyconverter" component={CurrencyConverter} />
          <Route path="/" exact render={() => <h1>404 Not Found</h1>}/>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
