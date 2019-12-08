import React from 'react';
import { shallow} from 'enzyme';
import { create } from "react-test-renderer";
import App from '../src/Components/App.jsx';

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
      expect(instance.getListing).toHaveBeenCalledTimes(1); // You check if the condition you want to match is correct.
    });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);

    expect(component).toHaveLength(1);
  });
  describe('it should render props correctly', () => {
    const component = shallow(<App name="test"/>)

    expect(component.instance().props.name).toBe('test')
  });

  it('toggles the state is Clicked', () => {
    const wrapper = create(<App />);
    const instance = wrapper.getInstance();
    console.log(instance.state.isClicked)
    expect(instance.state.isClicked).toEqual(false);
    instance.changeToVisible();
    expect(instance.state.isClicked).toEqual(true);
    instance.changeToVisible();
    expect(instance.state.isClicked).toEqual(false);
  });

  it('toggles the state is Clicked for Guests', () => {
    const wrapper = create(<App />);
    const instance = wrapper.getInstance();
    expect(instance.state.guestsClicked).toEqual(false);
    instance.changeGuestsVisible();
    expect(instance.state.guestsClicked).toEqual(true);
    instance.changeGuestsVisible();
    expect(instance.state.guestsClicked).toEqual(false);
  });
});
