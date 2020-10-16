import { get } from './request';

export const fetchCampaigns = () => get('/campaigns');

export const fetchCampaignById = campaignId => get(`/campaigns/${campaignId}`);

/* eslint-disable no-undef */


export const fetchListOregon = () => {
  return fetch(`${process.env.API_URL}/campaigns/oregon`)
    .then((res) => res.json())
    .then((json) => json);
};

export const fetchListNoCal = () => {
  return fetch(`${process.env.API_URL}/campaigns/nocal`)
    .then((res) => res.json())
    .then((json) => json);
};

export const fetchListSoCal = () => {
  return fetch(`${process.env.API_URL}/campaigns/socal`)
    .then((res) => res.json())
    .then((json) => json);
};

export const fetchListCentralCal = () => {
  return fetch(`${process.env.API_URL}/campaigns/centralcal`)
    .then((res) => res.json())
    .then((json) => json);
};

export const fetchListWashington = () => {
  return fetch(`${process.env.API_URL}/campaigns/washington`)
    .then((res) => res.json())
    .then((json) => json);
};
