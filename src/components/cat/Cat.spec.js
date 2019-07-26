import React from 'react';
import { shallow} from 'enzyme';
import Cat from './Cat';
import {findByTestAtrr,checkProps} from '../../../utils'

const setUp = (props={}) =>{
  const component = shallow(<Cat {...props} />);
  return component;
};

describe('Cat Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                category: 1,
                children: 'Test Children',
            };
            const propsErr = checkProps(Cat, expectedProps)
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
              category: 1,
              children: 'Test Children',
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'listComponent');
            expect(component.length).toBe(1);
        });
    });
});
