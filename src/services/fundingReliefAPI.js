export const fetchList = () => {
  return fetch('http://fundingrelief.herokuapp.com/campaigns')
    .then((res) => res.json())
    .then((res) =>
      res.results.map((json) => ({
        id: json.id,
        campaign_name: json.campaign_name,
        goal: json.goal,
        percentage: json.percentage,
        donors: json.donors,
        location: json.location,
        img_url: json.img_url,
        link_url: json.link_url,
      }))
    );
};

export const fetchDetail = (id) => {
  return fetch(`http://fundingrelief.herokuapp.com/campaigns/${id}`)
    .then((res) => res.json())
    .then((json) => ({
      id: json.id,
      campaign_name: json.campaign_name,
      goal: json.goal,
      percentage: json.percentage,
      donors: json.donors,
      location: json.location,
      img_url: json.img_url,
      link_url: json.link_url,
      description: json.description,
    }));
};
