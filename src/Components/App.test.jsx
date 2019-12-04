import React from 'react';
import { shallow} from 'enzyme';
import App from './App.jsx';

describe('Test', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);
    const state = component.state().pricePerNight;
    console.log(state)
  
    expect(component.exists()).toBe(true);
  });
});
