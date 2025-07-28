import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (parseFloat(rupees) * 80); 
    alert(`Converting to Euro Amount is ${euroValue}`);
    setEuros(euroValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'flex-start', gap: '30px' }}>
      {/* Input Column */}
      <div style={{ textAlign: 'left' }}>
        <h2 style={{ color: 'green' }}>Currency Converter!!!</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>Amount:</label>
            <input
              type="number"
              value={rupees}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>Currency:</label>
            <select>
              <option>Euro</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
}

export default CurrencyConverter;
