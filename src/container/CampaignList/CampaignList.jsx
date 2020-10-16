import React from 'react';
import { Card, Segment, Container, Dimmer, Loader, Image } from 'semantic-ui-react';
import List from '../../components/List/List';
import { useGetCampaigns } from '../../hooks/getCampaigns';
import { fetchCampaigns } from '../../services/fundingReliefAPI';

const CampaignList = () => {
  const { campaigns, loading } = useGetCampaigns(fetchCampaigns);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return (
    <>
      <Container style={{ padding: '5em' }}>
        <Segment>
          {loading && <>
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Segment><br /></>}
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

export default CampaignList;
