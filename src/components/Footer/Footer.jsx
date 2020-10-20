import React from 'react';
// import styles from './Footer.css';
import { Segment } from 'semantic-ui-react';


const Footer = () => {

  return (
    <Segment inverted vertical as="footer">
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide colum">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <a href={'/about'} className="item">
                    The Site
                </a>
                <a href="#" className="item">
                    Contact Us
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Segment>
  );
};

export default Footer;
