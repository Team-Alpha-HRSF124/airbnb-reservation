import React from 'react';
import renderer from 'react-test-renderer';
import GuestAdd from '../src/Components/GuestsAdd.jsx';
import { shallow } from 'enzyme';
import { create } from "react-test-renderer";

describe('<GuestAdd /> component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<GuestAdd />);

        expect(tree).toMatchSnapshot();
    });

    it('initiates with state of 0 children', () => {
        const wrapper = shallow(<GuestAdd />);
        expect(wrapper.state().childrenCount).toBe(0);
    });
    it('initiates with state of 0 children', () => {
        const wrapper = shallow(<GuestAdd />);
        expect(wrapper.state().adultsCount).toBe(1);
    });
    it('initiates with state of 0 children', () => {
        const wrapper = shallow(<GuestAdd />);
        expect(wrapper.state().infantsCount).toBe(0);
    });

    it('initiates with test', () => {
        const wrapper = shallow(<GuestAdd />);
        expect(wrapper.contains("4 guests maximum. Infants don’t count toward the number of guests.")).toBe(true)
    });
    
    it('changes the state for adultCount', () => {
        const props = { countAdults: () => {}}
        const wrapper = create(<GuestAdd {...props}/>);
        const instance = wrapper.getInstance();
        expect(instance.state.adultsCount).toBe(1);
        instance.adultsCountUp();
        expect(instance.state.adultsCount).toBe(2);
        instance.adultsCountDown();
        expect(instance.state.adultsCount).toBe(1);
    });

    it('changes the state for children count', () => {
        const props = { countChildren: () => {}}
        const wrapper = create(<GuestAdd {...props}/>);
        const instance = wrapper.getInstance();
        expect(instance.state.childrenCount).toBe(0);
        instance.childrenCountUp();
        expect(instance.state.childrenCount).toBe(1);
        instance.childrenCountDown();
        expect(instance.state.childrenCount).toBe(0);
    });

    it('changes the state for infants count', () => {
        const props = { countInfants: () => {}}
        const wrapper = create(<GuestAdd {...props}/>);
        const instance = wrapper.getInstance();
        expect(instance.state.infantsCount).toBe(0);
        instance.infantsCountUp();
        expect(instance.state.infantsCount).toBe(1);
        instance.infantsCountDown();
        expect(instance.state.childrenCount).toBe(0);
    });
});