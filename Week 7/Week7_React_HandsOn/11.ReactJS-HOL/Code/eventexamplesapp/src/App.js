// src/App.js
import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
    console.log("Synthetic Event Type:", e.type);
  };

  return (
    <div style={{ textAlign: 'left', padding: '30px' }}>
      

      <div style={{ padding: '20px', marginBottom: '40px' }}>
        <h4>{count}</h4>
        <button onClick={increment}>Increase</button><br/><br/>
        <button onClick={decrement}>Decrement</button>

        <div style={{ marginTop: '20px' }}>
          <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
        </div>

        <div style={{ marginTop: '20px' }}>
          <button onClick={handleClick}>Click Me</button>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
