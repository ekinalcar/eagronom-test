import React from 'react';
import { shallow} from 'enzyme';
import CatImage from './CatImage';
import {findByTestAtrr,checkProps} from '../../../utils'

const setUp = (props={}) =>{
  const component = shallow(<CatImage {...props} />);
  return component;
};

describe('CatImage Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                src: 'https://cdn2.thecatapi.com/images/cbt.jpg',
            };
            const propsErr = checkProps(CatImage, expectedProps)
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
              src: 'https://cdn2.thecatapi.com/images/cbt.jpg',
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'loaderComponent');
            expect(component.length).toBe(1);
        });
    });
});
