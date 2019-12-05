import React from 'react';
import { mount, shallow} from 'enzyme';
import App from './App.jsx';

describe('<App/>', () => {
  // Inside your general `Describe`
  let wrapper;
  const props = {
    // Your props goes here..
  };
  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
  });

    it('should check `componentDidMount()`', () => {
      const instance = wrapper.instance(); // you assign your instance of the wrapper
      jest.spyOn(instance, 'getListing'); // You spy on the randomFunction
      instance.componentDidMount();
      console.log(instance.getListing)
      expect(instance.getListing).toHaveBeenCalledTimes(1); // You check if the condition you want to match is correct.
    });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);

    expect(component).toHaveLength(1);
  });
  describe('it should render props correctly', () => {
    const component = shallow(<App name="test"/>)

    expect(component.instance().props.name).toBe('test')
  })
  describe('<MyComponent />', () => {
    it('renders three <Foo /> components', () => {
      const wrapper = mount(<App />);
      console.log(wrapper.debug())
      expect(wrapper.find('Form').length).toBe(1);
    });
  })
});
