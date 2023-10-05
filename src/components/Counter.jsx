import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      console.log('Counter mencapai angka 10');
    }
  }, [count]);

  return (
    <div className="bg-pink">
      <h1>Counter Kelompok 29</h1>
      {count === 10 ? <p>Counter sudah 10!</p> : <p>Nilai saat ini: {count}</p>}
      {count === 10 ? (
        <button onClick={() => setCount(count - 1)}>-</button>
      ) : (
        <>
          <button onClick={() => setCount(count + 1)}>+</button>
          {count > 0 && <button onClick={() => setCount(count - 1)}>-</button>}
        </>
      )}
    </div>
  );
};

export default Counter;
