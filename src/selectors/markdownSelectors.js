export const getMarkdown = state => state.editor.files.find(element => element.id === state.editor.focus).markdown;
export const getFiles = state => {
  return Object.keys(state.editor.files);
};
export const getFocus = state => state.editor.focus;
