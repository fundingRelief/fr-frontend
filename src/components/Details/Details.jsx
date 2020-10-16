import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Details.css';

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
  return (
    <>
      <Container text className={styles.Details}>
      
        <Image
          centered
          bordered rounded size="large"
          src={img_url} alt="Fund being described."
        />
        <Header textAlign={'center'}>{campaign_name}</Header>
        <Card.Description>{description}</Card.Description>
        <Card.Meta>{location}</Card.Meta>
        <Card.Meta>{last_donation}</Card.Meta>
        <Card.Meta>${numberWithCommas(current_amount)} out of ${numberWithCommas(goal)}{' '}
            goal
        </Card.Meta>
        <Card.Meta>
          {percentage_raised}% fulfilled
        </Card.Meta>
        <Icon name="user" href={link_url} target="_blank" rel="noopener noreferrer">
            Donate Now GoFundMe
        </Icon>
        <br />
        <Link to={'/'}>back</Link>

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
