import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TabBar from './TabBar';


const Document = ({ markdown, updateMarkdown, files, handleClick, handleAdd }) => {

  return (
    <>
      <div className={styles.Document}>
        <TabBar files={files}  handleClick={handleClick} handleAdd={handleAdd}/>
        <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
};



const mapStateToProps = state => ({
  markdown: getMarkdown(state),
  files: getFiles(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch({ type: 'UPDATE_MARKDOWN', payload: target.value });
  }
});

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
