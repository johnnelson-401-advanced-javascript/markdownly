export const getMarkdown = state => state.editor.files[state.editor.focus];
export const getFiles = state => {
  return Object.keys(state.editor.files);
};
