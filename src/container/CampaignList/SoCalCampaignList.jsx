import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card } from 'semantic-ui-react';
import { fetchListSoCal } from '../../services/fundingReliefAPI';

const SoCalCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchListSoCal().then((fetchSoCalCampaignList) =>
      setCampaigns(fetchSoCalCampaignList)
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

export default SoCalCampaignList;
