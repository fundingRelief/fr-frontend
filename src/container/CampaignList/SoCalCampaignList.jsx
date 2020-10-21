import React from 'react';
import List from '../../components/List/List';
import { Card, Segment, Container, Dimmer, Loader, Image } from 'semantic-ui-react';
import { fetchListSoCal } from '../../services/fundingReliefAPI';
import { useGetCampaigns } from '../../hooks/getCampaigns';

const SoCalCampaignList = () => {
  const { campaigns, loading } = useGetCampaigns(fetchListSoCal);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return (
    <>
      <Container style={{ padding: '5em' }}>
        <Segment>
          {loading && <>
            <Segment>
              <h2>Southern California Wildfire Relief</h2>
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

export default SoCalCampaignList;
