import { UPDATE_MARKDOWN, NEW_TAB, CHANGE_FILE, DELETE_TAB } from '../actions/markdownActions';
import { newId } from '../utils/idGenerator';

const id1 = newId();
const id2 = newId();

const initialState = {
  files: [
    {
      id: id1,
      title: '1',
      markdown: 'type here'
    },
    {
      id: id2,
      title: '2',
      markdown: '2 type here'
    }
  ],
  focus: id1
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, files: state.files.map(file => {
        if(file.id === focus) return { ...file, markdown: action.payload };
        return file;
      })
      };
    case CHANGE_FILE: // need to change
      return { ...state, focus: action.payload };
    case NEW_TAB:
      return { ...state, files: { ...state.files, [action.payload]: 'Type Here' } };
    case DELETE_TAB: {
      const newState = { ...state };
      delete newState.files[action.payload];
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
