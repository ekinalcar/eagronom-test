import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as actions from '../actions/index'

import Cat from '../components/cat/Cat'

class CategoryList extends React.Component {
  render() {
    const {categories, activeCategoryId} = this.props;

    let categoryNameList = <div> Loading Names...</div>
    if (!categoryNameList) {
      return null
    }

    if (categories) {
       categoryNameList = categories.map( (category) => {
        return (
          <Cat
            className="categoryList"
            key={category.id}
            category={category.id}
            handleClick={this.props.changeActiveCategory}
            isActive={activeCategoryId === category.id}
          >
            {category.name}
          </Cat>)
      })
    } else {
        categoryNameList = <div>Found nothing. Please try again.</div>
    };
    return (
        <ul className="categoryListContainer">
          {categoryNameList}
        </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categories.items,
    loading: state.categories.loading,
    error: state.categories.error,
    activeCategoryId: state.categories.activeCategoryId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeActiveCategory: (categoryId) => {
       dispatch(actions.changeActiveCategory(categoryId))
    },
  };
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategoryId: PropTypes.number,
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
