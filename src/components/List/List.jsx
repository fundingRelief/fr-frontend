import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './List.css';
import { Card, Icon, Image, Progress } from 'semantic-ui-react';

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
    <Card 
      color="teal"
      raised={true}>
      <Card.Content>
        <Link className={styles.link} to={`/campaigns/${id}`}>
          <Image 
            bordered rounded size="large"
            style={{ backgroundImage: `url(${img_url})` }}
            className={styles.cardImg}
          />
        </Link>
        <Link className={styles.link} to={`/campaigns/${id}`}>
          <Card.Header 
            className={styles.header}
            textAlign={'left'}
          >        
            {campaign_name}
          </Card.Header>
        </Link>
 
        <Card.Description className={styles.location}>
          {location}
        </Card.Description>
        <Card.Description className={styles.description}>
          {description}
        </Card.Description>
        <Card.Meta className={styles.donation}>
          {last_donation}
        </Card.Meta>
        <Card.Meta>
          <Progress 
            percent={percentage_raised} 
            progress
            className={styles.progressBar}
            color="teal"/>
        </Card.Meta>
        <Card.Meta className={styles.raised}>
          <strong>${numberWithCommas(current_amount)} raised of </strong> ${numberWithCommas(goal)}{' '}goal
        </Card.Meta>
      </Card.Content>
      <Card.Content 
        extra
        textAlign="center">
        <a href={link_url} target="_blank" rel="noopener noreferrer">
          <Icon name="user" />
              Donate Now at GoFundMe
        </a>
      </Card.Content>
    </Card>
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
  description: PropTypes.string,
  last_donation: PropTypes.string.isRequired,
};

export default List;
