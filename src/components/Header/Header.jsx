import React from 'react';
import styles from './Header.css';
import { Menu, Dropdown, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div>
      <Menu secondary inverted fluid fixed="top">
        <Container 
          className={styles.container} 
          fluid 
          style={{ minHeight: '3em', padding: '0.5em 1em' }}>
          <Dropdown 
            text="Campaigns" 
            pointing
            className="link item" 
            floating
          >
            <Dropdown.Menu>
              <Dropdown.Header>Disasters</Dropdown.Header>
              <Dropdown.Item>
                <Dropdown text="Wildfire" simple>
                  <Dropdown.Menu>
                    <Dropdown.Header>California</Dropdown.Header>
                    <Dropdown.Item>
                      <Link to={'/campaigns/no-cal-fires'} style={{color:'black'}}>Nor-Cal Fires</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to={'/campaigns/central-cal-fires'}style={{color:'black'}}>Central-Cal Fires</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>                        
                      <Link to={'/campaigns/so-cal-fires'}style={{color:'black'}}>So-Cal Fires</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Oregon</Dropdown.Header>
                    <Dropdown.Item>
                      <Link to={'/campaigns/oregon-fires'}style={{color:'black'}}>Oregon Fires (All)</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Washington</Dropdown.Header>
                    <Dropdown.Item>                       
                      <Link to={'/campaigns/washington-fires'}style={{color:'black'}}>Washington Fires (All)</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item position="right">
            <Link to={'/'}>
              Funding Relief
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default Header;
