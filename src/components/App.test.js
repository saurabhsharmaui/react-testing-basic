import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe('App', () => {
    const app = shallow(<App />);
    it('render correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });
    describe('when clicking the `add-gift` button', () => {
        const id = 1;
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });
        afterEach(() => {
            app.setState({ gifts: [] });
        });
        it('adds a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{ id }]);
        });

        it('adds a new gift to render list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });
        it('creates a Gift Component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });
        describe('and the user want to remove added gitfs', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            })
            it('removes the gift from `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });

    });


})


