import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Image, Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Details.css';
import { useLastPage } from '../../hooks/CampaignsProvider';

const Details = ({
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
  const lastPage = useLastPage();
  return (
    <>
      <Container text className={styles.Details}>
        <Image
          centered
          bordered rounded size="large"
          src={img_url} alt="Fund being described."
        />
        <Header textAlign={'center'}>{campaign_name}</Header>
        <p className={styles.Whatever}>
          {description}
        </p>
        {location}
        {last_donation}
        ${numberWithCommas(current_amount)} out of ${numberWithCommas(goal)}{' '} goal
        {percentage_raised}% fulfilled
        
        <Icon name="user" href={link_url} target="_blank" rel="noopener noreferrer">
            Donate Now GoFundMe
        </Icon>
        <br />
        <Link to={lastPage}>back</Link>

      </Container>
    </>
  );
};

Details.propTypes = {
  id: PropTypes.number,
  campaign_name: PropTypes.string.isRequired,
  current_amount: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  percentage_raised: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  link_url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  last_donation: PropTypes.string.isRequired,
  cause: PropTypes.string.isRequired,
};

export default Details;
