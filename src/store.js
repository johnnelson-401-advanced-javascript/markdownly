import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import { saveState } from './utils/localStorage';


store.subscribe(() => {
  saveState(store.getState().editor);
});


export default store;
