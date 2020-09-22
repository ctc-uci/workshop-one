import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';

function Question(props) {
  const {
    index, questionText, answerText, expanded, handleClick,
  } = props;

  return (
    <div className="question-card" onClick={() => handleClick(index)} onKeyDown={() => handleClick(index)} role="tab" tabIndex={0}>
      <div className="top-half">
        <div className="symbol">
          <span className="expand-symbol">{expanded ? '-' : '+'}</span>
        </div>
        <h2 className="question-text">{questionText}</h2>
      </div>
      <div className={(expanded ? 'bottom-half' : 'hidden')}>
        <p>{answerText}</p>
      </div>
    </div>
  );
}

Question.propTypes = {
  index: PropTypes.number.isRequired,
  questionText: PropTypes.string.isRequired,
  answerText: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Question;
