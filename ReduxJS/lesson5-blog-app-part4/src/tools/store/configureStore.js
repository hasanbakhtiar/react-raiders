import {combineReducers, createStore} from 'redux';
import {blogReducer} from '../reducers/blog';

const configureStore=()=>{
  const store = createStore(combineReducers({
    blog:blogReducer,
  }));
  return store;
}

export default configureStore;
