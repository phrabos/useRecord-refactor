import React from 'react';
import useRecord from './useRecord';
import "./styles.css";


function App() {
  const { current, undo, redo, record, idx, historyArr} = useRecord('#FF0000');
  return (
    <>
      <button disabled={idx === 0} onClick={undo}>undo</button>
      <button disabled={idx === historyArr.length -1} onClick={redo}>redo</button>
      <input type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  )
}

export default App;
