export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (markdown) => ({
  type: UPDATE_MARKDOWN,
  payload: markdown
});

export const CHANGE_FILE = 'CHANGE_FILE';
export const changeFile = (id) => ({
  type: CHANGE_FILE,
  payload: id
});

export const NEW_TAB = 'NEW_TAB';
export const newTab = () => ({
  type: NEW_TAB,
});

export const DELETE_TAB = 'DELETE_TAB';
export const deleteTab = (id) => ({
  type: DELETE_TAB,
  payload: id
});

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const changeTitle = (title, id) => ({
  type: CHANGE_TITLE,
  payload: { title: title, id: id }
});

