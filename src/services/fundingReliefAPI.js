/* eslint-disable no-undef */

export const fetchList = () => {
  return fetch(`${process.env.API_URL}/campaigns/percentage`)
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
