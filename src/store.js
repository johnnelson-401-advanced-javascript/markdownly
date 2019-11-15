import { createStore } from 'redux';
import reducer from './reducers';
import { saveState } from './utils/localStorage';


const middleWare = store => next => action => {
  
  store.subscribe(() => {
    saveState(store.getState().editor);
  });

next(action);

}

export default createStore(
  reducer,
  applyMiddleware(
    middleWare
  )
);





