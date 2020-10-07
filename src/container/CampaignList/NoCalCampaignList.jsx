import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { fetchListNoCal } from '../../services/fundingReliefAPI';

const NoCalCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchListNoCal().then((fetchNoCalCampaignList) =>
      setCampaigns(fetchNoCalCampaignList)
    );
  }, []);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return <>{campaignNodes}</>;
};

export default NoCalCampaignList;
