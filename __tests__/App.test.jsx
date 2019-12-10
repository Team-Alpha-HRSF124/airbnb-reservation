import React from 'react';
import { shallow} from 'enzyme';
import { create } from "react-test-renderer";
import App from '../src/Components/App.jsx';
import "@babel/polyfill";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";

let container;

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

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe("User component", () => {
    test("it shows a list of users", async () => {
      await act(async () => {
        render(<App />, container);
      });

      expect(container.textContent).toBe("$ per night⭐️0 (0 reviews)Dates:Check inCheck outGuests: 1 guestReserve");
    });
  });

  describe("User component new fetch", () => {
    test("it shows a list of users", async () => {
      const fakeResponse = [{ pricePerNight: 5 }, { cleaningFees: 5, 
        serviceFees: 5,  average_rating: 1.49, number_of_reviews: 221}];
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
        global.fetch.mockImplementation(() => {
        const fetchResponse = {
          json: () => Promise.resolve(fakeResponse)
        };
        return Promise.resolve(fetchResponse);
      });
      await act(async () => {
        render(<App />, container);
      });
      expect(container.textContent).toBe("$ per night⭐️0 (0 reviews)Dates:Check inCheck outGuests: 1 guestReserve");
      window.fetch.mockRestore();
      global.fetch.mockClear();
      delete global.fetch;
    });
  });
});
