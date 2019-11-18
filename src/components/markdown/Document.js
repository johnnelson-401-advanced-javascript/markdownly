import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { TabBar } from './TabBar';
import { getMarkdown, getFiles, getFocus, getEditTitle } from '../../selectors/markdownSelectors';
import { updateMarkdown, changeFile, newTab, deleteTab, changeTitle, toggleEdit } from '../../actions/markdownActions';


export default function Document() {
  
  const markdown = useSelector(state => getMarkdown(state));
  const files = useSelector(state => getFiles(state));
  const focus = useSelector(state => getFocus(state));
  const editTitle = useSelector(state => getEditTitle(state));
  
  const dispatch = useDispatch();
  

  const changeMarkdown = ({ target }) => dispatch(updateMarkdown(target.value));
  const handleClick = ({ currentTarget }) => dispatch(changeFile(currentTarget.id));
  const handleAdd = () => dispatch(newTab());
  const handleDelete = id => dispatch(deleteTab(id));
  const handleTitle = ({ target }) => dispatch(changeTitle(target.value, target.id));
  const handleTitleEdit = id => dispatch(toggleEdit(id));
  
  Document.propTypes = {
    markdown: PropTypes.string.isRequired,
    changeMarkdown: PropTypes.func.isRequired,
    files: PropTypes.array.isRequired,
    handleAdd: PropTypes.func,
    handleClick: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    focus: PropTypes.string.isRequired,
    handleTitle: PropTypes.func.isRequired,
    editTitle: PropTypes.shape({
      editInput: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired
    }),
    handleTitleEdit: PropTypes.func.isRequired
  };
  return (
    <>
      <div className={styles.Document}>
        <TabBar files={files}
          editTitle={editTitle}
          handleClick={handleClick}
          handleTitle={handleTitle}
          handleAdd={() => handleAdd()}
          handleDelete={handleDelete}
          handleTitleEdit={handleTitleEdit}
          focus={focus}
        />
        <div style={{ 'display': 'flex' }}>
          <Editor markdown={markdown} updateMarkdown={changeMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </div>
    </>
  );
}



