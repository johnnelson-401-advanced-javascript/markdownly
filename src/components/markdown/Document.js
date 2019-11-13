import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TabBar } from './TabBar';
import { getMarkdown, getFiles } from '../../selectors/markdownSelectors';
import { updateMarkdown, changeFile, newTab } from '../../actions/markdownActions';



const Document = ({ markdown, files, changeMarkdown, handleAdd, handleClick }) => {

  return (
    <>
      <div className={styles.Document}>
        <TabBar files={files} handleClick={handleClick} handleAdd={()=>handleAdd(files.length)} />
        <div style={{ 'display': 'flex' }}>
          <Editor markdown={markdown} updateMarkdown={changeMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </div>
    </>
  );
};


const mapStateToProps = state => ({
  markdown: getMarkdown(state),
  files: getFiles(state)
});

const mapDispatchToProps = dispatch => ({
  changeMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  },
  handleClick({ currentTarget }) {
    dispatch(changeFile(currentTarget.name));
  },
  handleAdd(length) {
    dispatch(newTab(length)),
    dispatch(changeFile(length + 1));
  }
});

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  changeMarkdown: PropTypes.func.isRequired,
  files: PropTypes.array.isRequired,
  handleAdd: PropTypes.func,
  handleClick: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
