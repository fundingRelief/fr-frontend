import React, { useEffect, useState } from 'react';
import { Card, Segment, Container } from 'semantic-ui-react';
import List from '../../components/List/List';
import { fetchList } from '../../services/fundingReliefAPI';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchList().then((fetchCampaignList) => setCampaigns(fetchCampaignList));
  }, []);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />
  
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
  ;
};

export default CampaignList;
