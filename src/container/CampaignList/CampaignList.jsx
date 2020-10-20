import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Card, Segment, Container, Dimmer, Loader, Image } from 'semantic-ui-react';
import List from '../../components/List/List';
import { useCampaign, useLoading, useLocalCampaigns, useSetLoading } from '../../hooks/getCampaigns';
import { fetchCampaigns } from '../../services/fundingReliefAPI';

const CampaignList = () => {

  const fetchedCampaigns = useCampaign();
  const fetchedLoading = useLoading();
  const fetchedLocalCampaigns = useLocalCampaigns();
  // let fetchedSetLoading = useSetLoading();

  // const [loading, setLoading] = useState(false);


  // const { campaigns, loading } = useGetCampaigns(fetchCampaigns);
  // let fetchedCampaigns = [];
  // let fetchedLoading = [];

  // if(fetchedCampaigns.length === 0) {
  //   const { campaigns, loading } = useGetCampaigns(fetchCampaigns);
  //   fetchedCampaigns = campaigns;
  //   fetchedLoading = loading;
  // }

  // if(fetchedCampaigns.length === 0) {
  //   setLoading(true);
  // } else {
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   if(fetchedCampaigns.length > 1) {
  //     setLoading(false);
  //   }
  // }, []);

  const campaignNodes = fetchedLocalCampaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  // console.log(campaigns);

  return (
    <>
      <Container style={{ padding: '5em' }}>
        <Segment>
          {fetchedLoading && <>
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
