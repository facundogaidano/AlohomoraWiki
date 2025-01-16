import React from 'react';
import clsx from 'clsx';

export default function Titulo ({ children, color }) {
  return (
    <header style={{ color: color }}>
      <h1>
        {children}
      </h1>
    </header>
  )
}