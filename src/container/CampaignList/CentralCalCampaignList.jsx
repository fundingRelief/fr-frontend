import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { Card, Segment, Container } from 'semantic-ui-react';
import { fetchListCentralCal } from '../../services/fundingReliefAPI';

const CentralCalCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchListCentralCal().then((fetchCentralCalCampaignList) =>
      setCampaigns(fetchCentralCalCampaignList)
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

export default CentralCalCampaignList;
