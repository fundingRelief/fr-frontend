import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { fetchList } from '../../services/fundingReliefAPI';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchList().then((fetchCampaignList) => setCampaigns(fetchCampaignList));
  }, []);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return <>{campaignNodes}</>;
};

export default CampaignList;
