import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(
      <List
        id={1}
        campaign_name="Our parents lost their home to the Almeda fire"
        current_amount={944}
        goal={5000}
        percentage={18.8}
        donors={18}
        location="PORTLAND, OR"
        img_url="https://d2g8igdw686xgo.cloudfront.net/51544330_1601348243982129_r.jpeg"
        link_url="https://gf.me/u/y2z2h8"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
