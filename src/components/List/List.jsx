import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './List.css';

const List = ({
  id,
  campaign_name,
  current_amount,
  goal,
  percentage_raised,
  location,
  img_url,
  link_url,
  description,
  last_donation,
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
      <h4>{percentage_raised}% fulfilled</h4>
      <h5>{last_donation}</h5>
      <img src={img_url} />
      <h4>
        <a href={link_url} target="_blank" rel="noopener noreferrer">
          GoFundMe link
        </a>
      </h4>
      <h4>{location}</h4>
      <p>{description}</p>
    </section>
  );
};

List.propTypes = {
  id: PropTypes.number.isRequired,
  campaign_name: PropTypes.string.isRequired,
  current_amount: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  percentage_raised: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  link_url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  last_donation: PropTypes.string.isRequired,
};

export default List;
