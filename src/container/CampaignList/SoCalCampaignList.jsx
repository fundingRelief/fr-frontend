import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
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

  return <>{campaignNodes}</>;
};

export default SoCalCampaignList;
