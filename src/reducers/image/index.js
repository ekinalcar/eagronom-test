import { FETCH_CATEGORY_IMAGES_SUCCESS } from "../../actions/index";

const data = (
  state = {
    items: {},
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case FETCH_CATEGORY_IMAGES_SUCCESS:
        const {categoryId, images} = action.payload;
        const newArray = Object.assign(state.items);
        newArray[categoryId] = images;
      return {
          ...state,
          items : newArray
    };
    default:
      return state;
  }
};
export default data;
