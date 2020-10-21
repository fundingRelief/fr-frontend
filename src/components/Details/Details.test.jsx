import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details';
import { CampaignsProvider } from '../../hooks/CampaignsProvider';

describe('Details component', () => {
  it('renders Details', () => {
    const wrapper = shallow(
      <CampaignsProvider>
        <Details
          campaign_name="Our parents lost their home to the Almeda fire"
          current_amount={944}
          goal={5000}
          percentage_raised={18}
          location="PORTLAND, OR"
          img_url="https://d2g8igdw686xgo.cloudfront.net/51544330_1601348243982129_r.jpeg"
          link_url="https://gf.me/u/y2z2h8"
          description="On September 8th our parents and many other families lost their home in Phoenix, Oregon. Our parents lost their place to relax and escape to after work. We as a family lost the place we knew we could walk right in without knocking and raid the fridge. The place where my boys would go to and run around in the backyard and play with Paco our family dog. The place where my brother would come back home to every summer after teaching in Oklahoma as teacher for Teach for America. The place where my sister would come home to when she would get homesick or just need a break from being a student at Portland State University. We decided to start this GoFundMe for our parents who have sacrificed for us their entire lives, they always put our needs ahead of theirs even to this day even after losing their home. We hope that we can do our part for them now. Thank you."
          last_donation="Last donation 2h ago"
          cause="https://www.gofundme.com/c/act/oregon-fires"
        />
      </CampaignsProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
