import React from 'react';

export default function Titulo ({ children, color }) {
  return (
    <header style={{ color: color }}>
      <h1>
        {children}
      </h1>
    </header>
  )
}