import React, { useEffect } from 'react';
import List from '../../components/List/List';
import { Card, Segment, Container, Dimmer, Loader, Image } from 'semantic-ui-react';
import { useCampaign, useLoading, useSetLastPage } from '../../hooks/CampaignsProvider';

const CentralCalCampaignList = () => {
  const campaigns = useCampaign();
  const loading = useLoading();
  const setLastPage = useSetLastPage();

  useEffect(() => {
    setLastPage('/campaigns/central-cal-fires');
  }, [campaigns]);

  function filterCentralCal(arr) {
    return arr.filter(campaign => campaign.cause === 'https://www.gofundme.com/c/act/central-california-fires');
  }

  const filteredCampaigns = filterCentralCal(campaigns);

  const campaignNodes = filteredCampaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return (
    <>
      <Container style={{ padding: '5em' }}>
        <Segment>  
          <h2>Central California Wildfire Relief</h2>
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

export default CentralCalCampaignList;
