import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './tools/store/configureStore';
import { addBlog } from './tools/actions/blog';
const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addBlog({
    img: 'https://wallpaperaccess.com/full/2433830.jpg',
    title: 'Blog One',
    desc: 'Description one',
  })
);
store.dispatch(
  addBlog({
    img: 'https://wallpapercave.com/wp/wp7348236.jpg',
    title: 'Blog Two',
    desc: 'Description two',
  })
);
store.dispatch(
  addBlog({
    img: 'https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg',
    title: 'Blog Three',
    desc: 'Description three',
  })
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
