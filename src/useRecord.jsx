import { useState, useEffect } from 'react';

const useRecord = (initial) => {

  const [current, setCurrent] = useState(initial);
  const [historyArr, setHistory] = useState([initial]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setCurrent(historyArr[idx])
  }, [idx])

  const record = (hex) => {
    // setCurrent(hex);
    setHistory(prev => [
      ...historyArr.slice(0, idx + 1),
      hex,
      ...historyArr.slice(idx + 1)])
    setIdx(prevIdx => prevIdx + 1)
  }

  const undo = () => {
    setIdx(prevIdx => prevIdx - 1)
    // setCurrent(historyArr[idx - 1])

  }
  const redo = () => {
    setIdx(prevIdx => prevIdx + 1)
    // setCurrent(historyArr[idx + 1])

  }


  return { current, undo, redo, record, idx, historyArr }
}

export default useRecord;