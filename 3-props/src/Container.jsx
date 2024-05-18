import React from 'react';

function Container({ children }) {
  return (
    <div
      style={{
        border: '1px solid white',
        padding: '3rem',
      }}
    >
      {children}
    </div>
  );
}

export default Container;
