/* eslint-disable no-undef */


export const fetchFunction = () => {
  return fetch(`${process.env.API_URL}/campaigns`)
    .then((res) => res.json())
    .then((json) => json);
};

// export const fetchList = () => {
//   return fetch(`${process.env.API_URL}/campaigns/percentage`)
//     .then((res) => res.json())
//     .then((json) => json);
// };

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

export const fetchDetail = (id) => {
  return fetch(`${process.env.API_URL}/campaigns/${id}`)
    .then((res) => res.json())
    .then((json) => json);
  //originally this:
  //.then((json) => json[0]);
};
