import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card, Container, Segment } from 'semantic-ui-react';
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
      <Container style={{ padding: '5em' }}>
        <Segment>
          <Card.Group 
            itemsPerRow={3}
            stackable="true">
            {campaignNodes}
          </Card.Group>
        </Segment>
      </Container>
    </>
  );
};

export default OregonCampaignList;
