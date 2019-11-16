import { createStore, applyMiddleware } from 'redux';
import editor from './reducers';
import { saveState, loadState } from './utils/localStorage';


const persistedState = loadState();

const localStorageMiddleWare = store => next => action => {

  next(action);
  
  if(action.type === 'UPDATE_MARKDOWN') {
    saveState(store.getState());
    
  }
  
  console.log(store.getState());

};

export default createStore(
  editor,
  persistedState,
  applyMiddleware(
    localStorageMiddleWare
  ),

);





