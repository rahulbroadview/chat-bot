import { useState } from 'react';
import * as React from 'react';
import './LipMovement.css';

const LipMovement = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Lip Movement</h1>
      <div className="avatar">
        <div
          className="lips-animation"
          style={{ animationDuration: `${text.length * 0.05}s` }}
        >
          {text}
        </div>
      </div>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
    </div>
  );
};

export default LipMovement;
