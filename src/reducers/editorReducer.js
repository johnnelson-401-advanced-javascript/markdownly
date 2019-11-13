import { UPDATE_MARKDOWN } from '../actions/markdownActions';
import { CHANGE_FILE } from '../actions/markdownActions';

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
    default:
      return state;
  }
};

export default reducer;
