import React from 'react';
import ReactDOM from 'react-dom';


function App() {
  return (
    <button style={{ color: 'red' }} className="btn-style">测试button</button>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));