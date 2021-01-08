import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function CandyButton(props) {
  return (
  <button style={{ color: 'red' }} className="btn-style">{props.title}</button>
  )
}

CandyButton.defaultProps = {
  title: '自定义button',
}

CandyButton.propTypes = {
  title: PropTypes.string,
}
export default CandyButton