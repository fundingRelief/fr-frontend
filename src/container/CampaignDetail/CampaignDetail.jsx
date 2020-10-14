import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../../components/Details/Details';
import { fetchDetail } from '../../services/fundingReliefAPI';

const CampaignDetail = () => {
  const [campaign, setCampaign] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchDetail(id).then((fetchCampaignDetail) =>
      setCampaign(fetchCampaignDetail)
    );
  }, []);

  const campaignNodes = campaign.map((detail) => {
    return <Details key={detail.id} {...detail} />;
  });

  return <>{campaignNodes}</>;
};

export default CampaignDetail;
