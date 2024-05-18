import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Component her render edilmesinde çalışır.
  useEffect(() => {
    console.log('Work 1');
  });

  // Component ilk render edildiğinde yalnızca 1 kez çalışır.
  useEffect(() => {
    console.log('Work 2');
  }, []);

  // Component ilk render edildiğinde ve count state değeri değiştiğinde çalışır
  useEffect(() => {
    console.log('Work 3');
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>App Component</div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
    </>
  );
}

export default App;
