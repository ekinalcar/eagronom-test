import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import {store} from './store/createStore';

import CategoryList from "./containers/CategoryList";
import CategoryImageList from "./containers/CategoryImageList";

import { getCategories } from "./actions/index"

import "./index.css";

function App() {
  return (
    <div className="wrapper">
      <CategoryList />
      <CategoryImageList/>
    </div>
  );
}

store.dispatch(getCategories());
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"));
