import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarkdown } from '../../selectors/markdownSelectors';
import { updateMarkdown } from '../../actions/markdownActions';



const Document = ({ markdown, changeMarkdown }) => {

  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} changeMarkdown={changeMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  changeMarkdown: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
