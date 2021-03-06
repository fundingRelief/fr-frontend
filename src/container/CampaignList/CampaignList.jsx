import React, { useEffect } from 'react';
import { Card, Segment, Container, Dimmer, Loader, Image } from 'semantic-ui-react';
import List from '../../components/List/List';
import Home from '../../components/Home/Home';
import { useCampaign, useLoading, useSetLastPage } from '../../hooks/CampaignsProvider';

const CampaignList = () => {
  const campaigns = useCampaign();
  const loading = useLoading();
  const setLastPage = useSetLastPage();

  useEffect(() => {
    setLastPage('/');
  }, [campaigns]);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return (
    <>
      <Home/>
      <Container style={{ padding: '5em' }}>
        <Segment>
          <h2>All Wildfire Relief Campaigns</h2>
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
