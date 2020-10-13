import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card } from 'semantic-ui-react';
import { fetchListOregon } from '../../services/fundingReliefAPI';

const OregonCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchListOregon().then((fetchOregonCampaignList) =>
      setCampaigns(fetchOregonCampaignList)
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

export default OregonCampaignList;
