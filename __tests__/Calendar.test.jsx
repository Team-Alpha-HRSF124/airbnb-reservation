import { mount } from 'enzyme';
import React from 'react';
import Calendar from '../src/Components/Calendar.jsx';
import moment from 'moment';


describe('<Calendar />', () => {
    let wrapper
  beforeEach(() => {
    wrapper = mount(<Calendar />);
  });
  test('should have a row of days in the day of the week', () => {
    expect(wrapper.text()).toContain('SunMonTueWedThuFriSat');
  });
  test('should show current day by default', () => {
    expect(wrapper.text()).toContain(moment().format('D'));
  });
  test('should have span with specific class name', () => {
    expect(
        wrapper.containsMatchingElement(
          <span className="label-month">December</span>
        )
      ).toBeTruthy()
  })
});