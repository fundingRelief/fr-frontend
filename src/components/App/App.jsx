import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import CampaignList from '../../container/CampaignList/CampaignList';
import CampaignDetail from '../../container/CampaignDetail/CampaignDetail';
import About from '../About/About';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CampaignList} />
        <Route exact path="/campaigns/:id?" component={CampaignDetail} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}
