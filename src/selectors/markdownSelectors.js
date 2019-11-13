export const getMarkdown = state => state.editor.files[state.focus];
export const getFiles = state => {
  return Object.keys(state.editor.files);
};
