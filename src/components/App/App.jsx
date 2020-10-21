import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import CampaignList from '../../container/CampaignList/CampaignList';
import CampaignDetail from '../../container/CampaignDetail/CampaignDetail';
import OregonCampaignList from '../../container/CampaignList/OregonCampaignList';
import NoCalCampaignList from '../../container/CampaignList/NoCalCampaignList';
import CentralCalCampaignList from '../../container/CampaignList/CentralCalCampaignList';
import SoCalCampaignList from '../../container/CampaignList/SoCalCampaignList';
// import WashingtonCampaignList from '../../container/CampaignList/WashingtonCampaignList';
import About from '../About/About';
import { CampaignsProvider } from '../../hooks/CampaignsProvider';

export default function App() {
  return (
    <div>
      <CampaignsProvider>
        <Router>
          <Header/>    
          <Switch>
            <Route exact path="/" component={CampaignList} />
            <Route exact path="/campaigns" component={CampaignList} />
            <Route
              exact
              path="/campaigns/central-cal-fires"
              component={CentralCalCampaignList}
            />
            <Route
              exact
              path="/campaigns/no-cal-fires"
              component={NoCalCampaignList}
            />
            <Route
              exact
              path="/campaigns/oregon-fires"
              component={OregonCampaignList}
            />     
            <Route
              exact
              path="/campaigns/so-cal-fires"
              component={SoCalCampaignList}
            />
            {/*<Route
              exact
              path="/campaigns/washington-fires"
              component={WashingtonCampaignList}
            />  */}
            <Route exact path="/campaigns/:id?" component={CampaignDetail} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </CampaignsProvider>
    </div>
  );
}
