import React from 'react';
import List from '../../components/List/List';
import { Card, Segment, Container } from 'semantic-ui-react';
import { fetchListSoCal } from '../../services/fundingReliefAPI';
import { useGetChallenges } from '../../hooks/getCampaigns';

const SoCalCampaignList = () => {
  const { campaigns, loading } = useGetChallenges(fetchListSoCal);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return (
    <>
      <Container style={{ padding: '5em' }}>
        <Segment>
          {loading && <h3>loading...</h3>}
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

export default SoCalCampaignList;
