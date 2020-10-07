import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { fetchListWashington } from '../../services/fundingReliefAPI';

const WashingtonCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchListWashington().then((fetchWashingtonCampaignList) =>
      setCampaigns(fetchWashingtonCampaignList)
    );
  }, []);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return <>{campaignNodes}</>;
};

export default WashingtonCampaignList;