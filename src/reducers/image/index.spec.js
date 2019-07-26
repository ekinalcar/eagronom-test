import imageReducer from '../image'
import { FETCH_CATEGORY_IMAGES_SUCCESS } from "./../../actions";

describe('Image Reducer',()=>{

  it('should return the initial state', () => {
    expect(imageReducer(undefined, {})).toEqual({'items': {},'loading': false,  'error': null});
  });

  it('should return new state if receiving type',()=>{
    const items = {"error": null,"items":{ "1":['1','1']},"loading": false};
    const newState = imageReducer(undefined,{
      type:FETCH_CATEGORY_IMAGES_SUCCESS,
      payload:items
    });
    expect(newState).toEqual({'items': {},'loading': false,  'error': null});
  });

});
