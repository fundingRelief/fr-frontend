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

  //I did this map because the page was erroring out because it doesn't await the data.  isRequired from PropTypes wasn't working correctly and the initial fetch was json[0].  The numberWithCommas function wouldn't work either because there was no data in it.  If I do this map then everything works the way it should, although there is likely a better way to accomplish this, please feel free to change.

  const campaignNodes = campaign.map((detail) => {
    return <Details key={detail.id} {...detail} />;
  });

  return <>{campaignNodes}</>;
};

export default CampaignDetail;
