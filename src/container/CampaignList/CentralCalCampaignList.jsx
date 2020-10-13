import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card } from 'semantic-ui-react';
import { fetchListCentralCal } from '../../services/fundingReliefAPI';

const CentralCalCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchListCentralCal().then((fetchCentralCalCampaignList) =>
      setCampaigns(fetchCentralCalCampaignList)
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

export default CentralCalCampaignList;
