import React from 'react';
import { Menu, Input, Segment } from 'semantic-ui-react';

const Footer = () => {

  return (
  // <Menu>
  //   <Menu.Item disabled>
  //     (c) My Copyright
  //   </Menu.Item>
  //   <Menu.Item position="right">
  //     <Input disabled label="Autor:"/>
  //   </Menu.Item>
  //   <Menu.Item >
  //     <Input disabled label="Date:"/>
  //   </Menu.Item>
  // </Menu>

    <Segment inverted vertical as="footer">
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide colum">
              <h4 className="ui inverted header">About</h4>

            </div>

          </div>
        </div>

      </div>
    </Segment>
  );
};

export default Footer;
