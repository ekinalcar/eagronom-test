import axios from 'axios';

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORY_IMAGES_SUCCESS = "FETCH_CATEGORY_IMAGES_SUCCESS";
export const CHANGE_ACTIVE_CATEGORY = "CHANGE_ACTIVE_CATEGORY";
export const CHANGE_SHOW_MORE = "CHANGE_SHOW_MORE";

export function getCategories(){
  return async (dispatch)=>{
    const response = await axios.get("https://api.thecatapi.com/v1/categories?api_key=ABC123");
    if( (typeof response.data !=='undefined') && (response.data.length > 0)){
      dispatch(fetchCategoriesSuccess(response.data));
      response.data.forEach(data => {
        dispatch(getCategoryImages(data.id))
      })
    }
  }
}
export function getCategoryImages(categoryId){
  return async (dispatch)=>{
    const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=20&page=0?category_ids="+categoryId);
    if( (typeof response.data !=='undefined') && (response.data.length > 0)){
      const info = response.data.slice(0, 20);
      const urls = [];
      info.forEach(img => {
        urls.push(img.url);
      })
      dispatch(fetchCategoryImagesSuccess(categoryId,urls));
    }
  }
}

export const changeActiveCategory = (categoryId) => ({
  type: CHANGE_ACTIVE_CATEGORY,
  payload: {
    categoryId: categoryId,
  }
});

export const changeShowMore = (number) => ({
  type: CHANGE_SHOW_MORE,
  payload: {
    showItems: number,
  }
})

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: { categories }
});
export const fetchCategoryImagesSuccess = (categoryId, images) => ({
  type: FETCH_CATEGORY_IMAGES_SUCCESS,
  payload: {
    categoryId: categoryId,
    images: images
  }
});
