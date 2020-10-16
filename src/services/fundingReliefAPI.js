import { get } from './request';

export const fetchCampaigns = () => get('/campaigns');
export const fetchCampaignById = campaignId => get(`/campaigns/${campaignId}`);

export const fetchListOregon = () => get('/campaigns/oregon');
export const fetchListNoCal = () => get('/campaigns/nocal');
export const fetchListSoCal = () => get('/campaigns/socal');
export const fetchListCentralCal = () => get('/campaigns/centralcal');
export const fetchListWashington = () => get('/campaigns/washington');
