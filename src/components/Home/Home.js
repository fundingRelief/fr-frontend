import React from 'react';
import styles from './Home.css'

import {
  Container,
  Divider,
  Grid, 
  Icon,
  Image,
  Segment,
  Header,
  Button
} from 'semantic-ui-react';

const Home = () => {

return (
    <Container 
      textAlign='center'
      fluid
      className={styles.container}>
      <div>
        <p className={styles.p1}>
          Starting in August of 2020, California, Oregon, and Washington experienced some of the worst wildfires in the last 70 years. Some of these wildfires continue to burn today. With more than 3 million hectares burned so far, wilfires on the West Coast have taken the lives of more than 40 people, destroyed more than 14,000 structures, and will cost the economies of these states billions of dollars. 
        </p>
        <Divider/>
        <p className={styles.p2}>
          Individuals, families, even small-town municipal agencies affected by these wildfires have turned to the popular website GoFundMe to raise money in an effort to rebuild and reclaim what was lost. Many people choose to donate to funds they have a connection with. They recieve an email, text message, or see those in need through social media and go straight to a specific campaign. Unfortunately, some funds many not be as well connected and may face challenges getting the word out about their funding needs. As a result, these campaigns struggle to reach their goal. That's where our team at Funding Relief wants help out. 
        </p>
        <Divider/>
        <p className={styles.p3}> 
          Our idea is simple and builds on the incredible platform GoFundMe has already built. We wanted to create a space that let's people browse all of the current wildfire funds on the West Coast to learn more about about individuals and communities in need. You can can see detailed information about each fund and when you're ready can go directly to that funds GoFundMe page to donate. What makes our site a bit different, is that we wanted to ensure funds that are the furthest from reaching their goal make it to the top of the page. That's why when you will always those who still need the most relief at the top of the page. 
        </p>
      </div>
    </Container>
)
}


export default Home;

