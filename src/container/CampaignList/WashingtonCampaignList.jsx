import React from 'react';
import List from '../../components/List/List';
import { Card, Segment, Container } from 'semantic-ui-react';
import { fetchListWashington } from '../../services/fundingReliefAPI';
import { useGetChallenges } from '../../hooks/getCampaigns';

const WashingtonCampaignList = () => {
  const { campaigns } = useGetChallenges(fetchListWashington);

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
