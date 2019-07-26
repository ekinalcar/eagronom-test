import {
  FETCH_CATEGORIES_SUCCESS,
  CHANGE_ACTIVE_CATEGORY,
  CHANGE_SHOW_MORE
} from "../../actions/index";

const initialState = {
  items: [],
  loading: false,
  error: null,
  showItems:10,
};

export default function categoryReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
    const items = action.payload.categories;
      return {
        ...state,
        items: items
      };
      case CHANGE_ACTIVE_CATEGORY:
        const activeCategoryId = action.payload.categoryId;
        return {
            ...state,
            activeCategoryId,
            showItems:10,
      }
      case CHANGE_SHOW_MORE:
        const showItems = action.payload.showItems;
        return {
            ...state,
            showItems,
      }
    default:
      return state;
  }

}
