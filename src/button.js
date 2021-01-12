import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function CandyButton(props) {
  const [buttonWidth, setButtonWidth] = useState(100)
  const [buttonHeight, setButtonHeight] = useState(100)
  
  const add = () => {
    console.log(buttonWidth);
    const w = buttonWidth+10
    const h = buttonHeight+10
    setButtonWidth(w)
    setButtonHeight(h)
    props.onAdd()
  }

  const buttonStyle = {
    width: buttonWidth,
    height: buttonHeight
  }

  return (
    <>
      <p>name: {props.title}</p>
      <button 
        style={buttonStyle} 
        className="add_btn" 
        onClick={add}>
          按钮被点击了{props.value}次
      </button>
    </>
  )
}

CandyButton.defaultProps = {
  title: '自定义button',
}

CandyButton.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func.isRequired
}