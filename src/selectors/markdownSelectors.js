export const getMarkdown = state => state.editor.files.find(element => element.id === state.editor.focus).markdown;
export const getFiles = state => {
  return state.editor.files.map(file => {
    return { id: file.id, title: file.title };
  });
};
export const getFocus = state => state.editor.focus;
export const getLatestTab = state => state.editor.files[state.editor.files.length];
export const getEditTitle = state => state.editor.editTitle;
