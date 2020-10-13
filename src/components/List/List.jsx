import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './List.css';
import { Card, Icon, Image } from 'semantic-ui-react';

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
    <Card color='teal'>
      <Card.Content>
        <Image 
          bordered rounded size='large'
          src={img_url} alt='Fund being described.'
          />
        <Card.Header 
          textAlign={"center"}
          href={link_url}>        
          {campaign_name}
        </Card.Header>
        <Card.Description>
          {description}
        </Card.Description>
        <Card.Meta>
          {location}
        </Card.Meta>
        <Card.Meta>{last_donation}</Card.Meta>
        <Card.Meta>
          ${numberWithCommas(current_amount)} raised out of ${numberWithCommas(goal)}{' '}goal
        </Card.Meta>
        <Card.Meta>
          ${percentage_raised}% fulfilled
        </Card.Meta>
      </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' href={link_url} />
              Donate Now at GoFundMe
          </a>
      </Card.Content>
    </Card>
    // <section className={styles.List}>
    //   <h3>
    //     <Link to={`campaigns/${id}`}>{campaign_name}</Link>
    //   </h3>
    //   <h4>
    //     ${numberWithCommas(current_amount)} out of ${numberWithCommas(goal)}{' '}
    //     goal
    //   </h4>
    //   <h4>{percentage_raised}% fulfilled</h4>
    //   <h5>{last_donation}</h5>
    //   <img src={img_url} />
    //   <h4>
    //     <a href={link_url} target="_blank" rel="noopener noreferrer">
    //       GoFundMe link
    //     </a>
    //   </h4>
    //   <h4>{location}</h4>
    //   <p>{description}</p>
    // </section>
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
