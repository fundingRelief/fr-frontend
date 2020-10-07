import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
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

  return <>{campaignNodes}</>;
};

export default OregonCampaignList;
