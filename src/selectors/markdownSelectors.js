export const getMarkdown = state => state.editor.files[state.editor.focus];
export const getFiles = state => {
  console.log(state.editor.files);
  return Object.keys(state.editor.files);
};
