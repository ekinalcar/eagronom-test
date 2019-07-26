import categoryReducer from '../list'
import {FETCH_CATEGORIES_SUCCESS,CHANGE_ACTIVE_CATEGORY,CHANGE_SHOW_MORE} from "./../../actions";

describe('List Reducer',()=>{

  it('should return the initial state', () => {
    expect(categoryReducer(undefined, {})).toEqual({items:[],loading: false,  error: null,showItems:10});
  });

  it('FETCH_CATEGORIES_SUCCESS should return new state if receiving items',()=>{
    const testState =  [{items:{id: '1',name: 'test'}}];
    const newState = categoryReducer(undefined,{
      type:FETCH_CATEGORIES_SUCCESS,
      payload:testState
    });
    expect(newState).toEqual({loading:false,error:null,showItems:10});
  });

  it('CHANGE_ACTIVE_CATEGORY should return new state if receiving activeCategoryId',()=>{
    const testState = {showItems:10,activeCategoryId:5,items: [],loading: false,error: null};
    const newState = categoryReducer(undefined,{
      type:CHANGE_ACTIVE_CATEGORY,
      payload:testState
    });
    expect(newState).toEqual({showItems:10,items: [],loading: false,error: null});
  });

  it('CHANGE_SHOW_MORE should return new state if receiving showItems',()=>{
    const testState = {showItems:20,items: [],loading: false,error: null};
    const newState = categoryReducer(undefined,{
      type:CHANGE_SHOW_MORE,
      payload:testState
    });
    expect(newState).toEqual({showItems:20,items: [],loading: false,error: null});
  });
});
