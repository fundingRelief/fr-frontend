import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { fetchListCentralCal } from '../../services/fundingReliefAPI';

const CentralCalCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchListCentralCal().then((fetchCentralCalCampaignList) =>
      setCampaigns(fetchCentralCalCampaignList)
    );
  }, []);

  const campaignNodes = campaigns.map((campaign) => {
    return <List key={campaign.id} {...campaign} />;
  });

  return <>{campaignNodes}</>;
};

export default CentralCalCampaignList;
