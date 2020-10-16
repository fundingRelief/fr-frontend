import { useState, useEffect } from 'react';

export const useGetChallenges = fetchFunction => {
  const [campaigns, setCampaigns] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchFunction()
      .then(fetchedCampaigns => {
        setCampaigns(fetchedCampaigns);
        setLoading(false);
      });
  }, []);

  return { campaigns, setCampaigns, loading, setLoading };
};
