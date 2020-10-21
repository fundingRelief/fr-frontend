import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCampaigns } from '../services/fundingReliefAPI';

const CampaignsContext = createContext();

export const CampaignsProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState('/');

  useEffect(() => {
    setLoading(true);
    fetchCampaigns()
      .then(fetchedCampaigns => {
        setCampaigns(fetchedCampaigns);
        setLoading(false);
      });
  }, []);

  return (
    <CampaignsContext.Provider
      value={{
        campaigns,
        loading,
        lastPage,
        setLastPage
      }}
    >
      {children}
    </CampaignsContext.Provider>
  );
};

CampaignsProvider.propTypes = {
  children: PropTypes.node,
};

export const useCampaign = () => {
  const { campaigns } = useContext(CampaignsContext);
  return campaigns;
};

export const useLoading = () => {
  const { loading } = useContext(CampaignsContext);
  return loading;
};

export const useLocalCampaigns = () => {
  const { localCampaigns } = useContext(CampaignsContext);
  return localCampaigns;
};

export const useLastPage = () => {
  const { lastPage } = useContext(CampaignsContext);
  return lastPage;
};

export const useSetLastPage = () => {
  const { setLastPage } = useContext(CampaignsContext);
  return setLastPage;
};
