import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card } from 'semantic-ui-react';
import { fetchListNoCal } from '../../services/fundingReliefAPI';

const NoCalCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchListNoCal().then((fetchNoCalCampaignList) =>
      setCampaigns(fetchNoCalCampaignList)
    );
  }, []);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return (
    <>
      <Card.Group 
        itemsPerRow={4}
        stackable="true">
          {campaignNodes}
      </Card.Group>
    </>
    );
};

export default NoCalCampaignList;
