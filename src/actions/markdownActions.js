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
