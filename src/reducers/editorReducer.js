import { UPDATE_MARKDOWN } from '../actions/markdownActions';

const initialState = {
  markdown: 'Type in the black box'
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
};

export default reducer;
