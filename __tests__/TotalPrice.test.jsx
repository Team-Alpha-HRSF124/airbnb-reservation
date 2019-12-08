import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { create } from "react-test-renderer";
import TotalPrice from '../src/Components/TotalPrice.jsx';

describe('<TotalPrice /> component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<TotalPrice />);

        expect(tree).toMatchSnapshot();
    });

    it('toggles the state for night message', () => {
        const props = {pricePerNight: 0, cleaningFees: undefined,
            serviceFees: undefined, amountOfNights: NaN, end: 0, start: 0}
        const wrapper = create(<TotalPrice {...props}/>);
        const instance = wrapper.getInstance();
        console.log(instance.state)
        expect(instance.state.isNightMessageClicked).toEqual(false);
        instance.clickNightMessage();
        expect(instance.state.isNightMessageClicked).toEqual(true);
    });
});
