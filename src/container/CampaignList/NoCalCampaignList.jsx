import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card, Segment, Container } from 'semantic-ui-react';
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

export default NoCalCampaignList;
