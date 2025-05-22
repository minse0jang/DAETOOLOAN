import React from 'react';

export function Button({ children, onClick }) {
  return (
    <button
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
