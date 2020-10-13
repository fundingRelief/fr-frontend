import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card, Segment, Container } from 'semantic-ui-react';
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
    <Container>
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

export default SoCalCampaignList;
