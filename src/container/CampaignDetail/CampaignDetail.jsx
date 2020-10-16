import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details/Details';
import { fetchCampaignById } from '../../services/fundingReliefAPI';

const CampaignDetail = () => {
  const [campaign, setCampaign] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCampaignById(id)
      .then(campaign => {
        setCampaign(campaign);
      });
  }, []);

  const campaignNodes = campaign.map((detail) => {
    return <Details key={detail.id} {...detail} />;
  });

  if(!campaign)
    return <h1>loading</h1>;

  return <>{campaignNodes}</>;
};

export default CampaignDetail;
