import React from 'react';
import PropTypes from 'prop-types';

const Details = ({
  campaign_name,
  current_amount,
  goal,
  percentage,
  donors,
  location,
  img_url,
  link_url,
  description,
}) => (
  <>
    <h3>{campaign_name}</h3>
    <h4>
      {current_amount} / {goal}
    </h4>
    <h4>
      {percentage}% filled with {donors} donors
    </h4>
    <img src={img_url} />
    <a href={link_url} target="_blank" rel="noopener noreferrer">
      link
    </a>
    <h4>{location}</h4>
    <p>{description}</p>
  </>
);

Details.propTypes = {
  id: PropTypes.number,
  campaign_name: PropTypes.string,
  current_amount: PropTypes.number,
  goal: PropTypes.number,
  percentage: PropTypes.number,
  donors: PropTypes.number,
  location: PropTypes.string,
  img_url: PropTypes.string,
  link_url: PropTypes.string,
  description: PropTypes.string,
};

export default Details;
