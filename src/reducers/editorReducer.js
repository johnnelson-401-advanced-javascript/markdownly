import { UPDATE_MARKDOWN, NEW_TAB, CHANGE_FILE, DELETE_TAB } from '../actions/markdownActions';

const initialState = {
  files: { 1: 'type here', 2: 'wtf' },
  focus: 1
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, files: { ...state.files, [state.focus]: action.payload } };
    case CHANGE_FILE:
      return { ...state, focus: action.payload };
    case NEW_TAB:
      return { ...state, files: { ...state.files, [action.payload]: 'Type Here' } };
    case DELETE_TAB: {
      const newState = state;
      delete newState.files[action.payload];
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
