import React from 'react';
import { shallow} from 'enzyme';
import App from './App.jsx';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Test', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);
  
    expect(component.exists()).toBe(true);
  });
});
