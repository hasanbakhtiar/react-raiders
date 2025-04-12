import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createStore} from 'redux';
import App from './App';

const initialState = {
  count:0
}

const counterReducer = (state=initialState,action)=>{
      switch (action.type) {
              case "INCREMENT":
                      return {count:state.count+action.payload};

                case "DECREMENT":
                      return {count:state.count-1};
                case "RESET":
                      return {count:0};
                default:
                  return state;
              }
}

const store = createStore(counterReducer);

store.subscribe(()=>{
  console.log(store.getState())
})


const incAction = (comingCount)=>({
  type:"INCREMENT",
  payload:comingCount
})

store.dispatch(incAction(10))
store.dispatch(incAction(5))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
