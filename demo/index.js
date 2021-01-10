import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CandyButton from '../src/button';

function App() {
  const [time, setTime] = useState(0)
  const changNumber = () => {
    const val = time+1;
    setTime(val);
  }
  return (
    <CandyButton title='candy_button' value={time} onAdd = {changNumber}/>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);