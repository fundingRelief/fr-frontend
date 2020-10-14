import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card, Segment, Container } from 'semantic-ui-react';
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
      <Container style={{ padding: '5em' }}>
        <Segment>
          <Card.Group 
            itemsPerRow={3}
            stackable={true}>
            {campaignNodes}
          </Card.Group>
        </Segment>
      </Container>
    </>
  );
};

export default WashingtonCampaignList;
