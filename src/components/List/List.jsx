import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './List.css';

const List = ({
  id,
  campaign_name,
  current_amount,
  goal,
  percentage,
  donors,
  location,
  img_url,
  link_url,
}) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <section className={styles.List}>
      <h3>
        <Link to={`campaigns/${id}`}>{campaign_name}</Link>
      </h3>
      <h4>
        ${numberWithCommas(current_amount)} out of ${numberWithCommas(goal)}{' '}
        goal
      </h4>
      <h4>
        {percentage}% fulfilled by {donors} donors
      </h4>
      <img src={img_url} />
      <h4>
        <a href={link_url} target="_blank" rel="noopener noreferrer">
          GoFundMe link
        </a>
      </h4>
      <h4>{location}</h4>
    </section>
  );
};

List.propTypes = {
  id: PropTypes.number.isRequired,
  campaign_name: PropTypes.string.isRequired,
  current_amount: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  donors: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  link_url: PropTypes.string.isRequired,
};

export default List;
