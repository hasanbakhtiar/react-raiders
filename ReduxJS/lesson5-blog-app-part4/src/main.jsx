import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './tools/store/configureStore';
import supabase from './utils/supabase.js';
import { getBlog } from './tools/actions/blog.js';
const store = configureStore();

const {data} = await supabase.from("react-raiders").select();
store.dispatch(getBlog(data));




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
