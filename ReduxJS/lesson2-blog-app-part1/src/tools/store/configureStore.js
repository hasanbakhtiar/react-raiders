import {createStore} from 'redux';
import {blogReducer} from '../reducers/blog';

const configureStore=()=>{
  const store = createStore(blogReducer);
  return store;
}

export default configureStore;
