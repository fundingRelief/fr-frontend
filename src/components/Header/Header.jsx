import React from 'react';
import styles from './Header.css';
import { Input, Menu, Segment, Icon, Dropdown, Container} from 'semantic-ui-react';

const Header = () => {

  return (
      <Segment
        // textAlign='center'
        style={{ minHeight: '.1em', padding: '0.5em 0em' }}
        vertical
        id={styles.segment}
        >
        <Menu secondary inverted fluid>
          <Container className={styles.container}>
          <Dropdown 
            text='Campaigns' 
            pointing
            className='link item' 
            floating>
              <Dropdown.Menu >
                <Dropdown.Header>Disasters</Dropdown.Header>
                <Dropdown.Item>
                  <Dropdown text='Wildfire'>
                    <Dropdown.Menu>
                      <Dropdown.Header>California</Dropdown.Header>
                      <Dropdown.Item href={"/campaigns/no-cal-fires"}>
                        Nor-Cal Fires
                      </Dropdown.Item>
                      <Dropdown.Item href={"/campaigns/central-cal-fires"}>
                        Central-Cal Fires
                      </Dropdown.Item>
                      <Dropdown.Item href={"/campaigns/so-cal-fires"}>
                        So-Cal Fires
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Oregon</Dropdown.Header>
                      <Dropdown.Item href={"/campaigns/oregon-fires"}>
                        Oregon Fires (All)
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Washington</Dropdown.Header>
                      <Dropdown.Item href={"/campaigns/washington-fires"}>
                        Washington Fires (All)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
                <Menu.Item position="right"
                  name='Funding Relief'
                  href={"/"}
              />
          </Container>
        </Menu>
     </Segment>
  );
}

export default Header;
 
