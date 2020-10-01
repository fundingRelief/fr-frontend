import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import CampaignList from '../../container/CampaignList';
import CampaignDetail from '../../container/CampaignDetail';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="detail/:id?" component={CampaignDetail} />
        <Route exact path="/" component={CampaignList} />
      </Switch>
    </Router>
  );
}
