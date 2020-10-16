import React from 'react';
import List from '../../components/List/List';
import { Card, Segment, Container } from 'semantic-ui-react';
import { fetchListNoCal } from '../../services/fundingReliefAPI';
import { useGetChallenges } from '../../hooks/getCampaigns';

const NoCalCampaignList = () => {
  const { campaigns } = useGetChallenges(fetchListNoCal);

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
