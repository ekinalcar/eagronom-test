import React from "react";
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import ImageLoader from '../ImageLoader'

const CatImage = props => {
  return (
    <LazyLoad className='ImageContainer'>
      <ImageLoader src = {props.src} data-test="loaderComponent"/>
    </LazyLoad>
  );
};
CatImage.propTypes = {
  src: PropTypes.string.isRequired,
}
export default CatImage;
