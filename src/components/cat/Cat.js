import React from "react";
import PropTypes from 'prop-types';

const Cat = props => {
  let className;
  if (props.isActive) {
    className = "active";
  }

  return (
    <li
      data-test="listComponent"
      id = {"category_"+props.category}
      onClick={() => {props.handleClick(props.category)}}
      className={className}
    >
      {props.children}
    </li>
  );
};

Cat.propTypes = {
  category: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
}
export default Cat;
