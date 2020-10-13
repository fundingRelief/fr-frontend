import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import styles from './Details.css';

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
  cause,
}) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <Card fluid color='teal'>
      <Card.Content>
        <Image 
          bordered rounded size='large'
          src={img_url} alt='Fund being described.'
          />
        <Card.Header textAlign={"center"}>{campaign_name}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <Card.Meta>{location}</Card.Meta>
        <Card.Meta>{last_donation}</Card.Meta>
        <Card.Meta> cause:{' '}
          <a 
            href={cause} target="_blank" rel="noopener noreferrer">
            {cause}
          </a>
       </Card.Meta>
        <Card.Meta>${numberWithCommas(current_amount)} out of ${numberWithCommas(goal)}{' '}
            goal
        </Card.Meta>
        <Card.Meta>
          ${percentage_raised}% fulfilled
        </Card.Meta>
      </Card.Content>
        <Card.Content extra>
        <a>
          <Icon name='user' href={link_url} />
            GoFundMe link
        </a>
      </Card.Content>
    </Card>
    // <section className={styles.Details}>
    //   <h3>{campaign_name}</h3>
    //   <h4>
    //     ${numberWithCommas(current_amount)} out of ${numberWithCommas(goal)}{' '}
    //     goal
    //   </h4>
    //   <h4>{percentage_raised}% fulfilled</h4>
    //   <img src={img_url} />
    //   <h4>
    //     <a href={link_url} target="_blank" rel="noopener noreferrer">
    //       GoFundMe link
    //     </a>
    //   </h4>
    //   <h4>{location}</h4>
    //   <p>{description}</p>
    //   <h4>{last_donation}</h4>
    //   <h4>
    //     cause:{' '}
    //     <a href={cause} target="_blank" rel="noopener noreferrer">
    //       {cause}
    //     </a>
    //   </h4>
    //   <h3>
    //     <Link to={'/'}>back</Link>
    //   </h3>
    // </section>
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
