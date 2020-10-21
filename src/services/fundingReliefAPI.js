import { get } from './request';

export const fetchCampaigns = () => get('/campaigns');
export const fetchCampaignById = campaignId => get(`/campaigns/${campaignId}`);
