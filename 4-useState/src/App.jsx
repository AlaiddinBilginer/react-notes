import { useState } from 'react';
import './App.css';

function App() {
  // useState, React'in Hook'larından biridir ve fonksiyonel bileşenlerde state management sağlamak için kullanılır. Fonksiyonel bileşenlerde durumu yönetebilmemizi ve durum değişikliklerine yanıt verebilmemizi sağlar. useState Hook'u, bileşenin durumunu tanımlamamıza ve bu durumu güncellemek için bir fonksiyon sağlamamıza olanak tanır.

  const [name, setName] = useState('Alaiddin');
  const [age, setAge] = useState(21);
  const [show, setShow] = useState(false);

  // Bir state'in değeri değiştiği zaman component tekrardan render edilir.

  const increaseAge = () => {
    debugger;
    setAge(age + 1);
  };

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div>App</div>
      {show && (
        <div style={{ padding: '2rem' }}>
          <p>
            {name} - {age}
          </p>
          <button onClick={increaseAge}>+1</button>
          {age > 0 && (
            <button
              onClick={() => {
                setAge(age - 1);
              }}
            >
              -1
            </button>
          )}
        </div>
      )}

      <button onClick={toggleShow}>Toggle Show</button>
    </>
  );
}

export default App;
