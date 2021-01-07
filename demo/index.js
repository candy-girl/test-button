import React from 'react';
import ReactDOM from 'react-dom';
import CandyButton from '../src/button';

function App() {
  return (
    <CandyButton title='candy_button' />
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);