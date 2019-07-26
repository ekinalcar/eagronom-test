import React,{Component} from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as actions from '../actions/index'

import CatImage from '../components/catImage/CatImage'

class CategoryImageList extends Component{

  render() {
    const { activeCategoryId, images,showItems } = this.props;

    let catImages = <div className="spinner">Please click any category from the left navigation bar</div>

    if (images[activeCategoryId]) {
      catImages = images[activeCategoryId].slice(0,showItems).map((url,index) => {
        return (
          <CatImage src={url} key={index}></CatImage>
        )
      });
    } else {
      return catImages;
    };

    return (
      <div className="categoryImageContainer">
        {catImages}
        {showItems === 10 ? (<button onClick={this.props.changeShowMore}>Show More</button>) : ''}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    images: state.images.items,
    loading: state.images.loading,
    error: state.images.error,
    activeCategoryId: state.categories.activeCategoryId,
    showItems: state.categories.showItems
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeShowMore: () => {
       dispatch(actions.changeShowMore(20))
    },
  };
}

CategoryImageList.propTypes = {
  showItems:PropTypes.number.isRequired,
  images: PropTypes.object.isRequired,
  activeCategoryId: PropTypes.number,
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryImageList);
