import React from 'react';

const Color = ({ children, color }) => (
  <span
    style={{
      color: color,
    }}
  >
    {children}
  </span>
);

export default Color;