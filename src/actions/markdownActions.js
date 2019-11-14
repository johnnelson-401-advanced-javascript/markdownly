export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (markdown) => ({
  type: UPDATE_MARKDOWN,
  payload: markdown
});

export const CHANGE_FILE = 'CHANGE_FILE';
export const changeFile = (name) => ({
  type: CHANGE_FILE,
  payload: name
});

export const NEW_TAB = 'NEW_TAB';
export const newTab = (length) => ({
  type: NEW_TAB,
  payload: length + 1
});

export const DELETE_TAB = 'DELETE_TAB';
export const deleteTab = (name) => ({
  type: DELETE_TAB,
  payload: name
});

