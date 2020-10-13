import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card, Container } from 'semantic-ui-react';
import { fetchListWashington } from '../../services/fundingReliefAPI';

const WashingtonCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchListWashington().then((fetchWashingtonCampaignList) =>
      setCampaigns(fetchWashingtonCampaignList)
    );
  }, []);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return (
    <>
      <Container>
        <Card.Group 
          itemsPerRow={4}
          stackable="true">
            {campaignNodes}
        </Card.Group>
      </Container>
    </>
    );
};

export default WashingtonCampaignList;
