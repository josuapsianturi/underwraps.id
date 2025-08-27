import React from 'react';

function Callout({ children, type = 'note' }) {
  const typeStyles = {
    check: 'border-green-300 bg-green-50 text-green-900',
    note: 'border-blue-300 bg-blue-50 text-blue-900',
    warning: 'border-yellow-300 bg-yellow-50 text-yellow-900',
  };
  
  const styles = typeStyles[type] ?? typeStyles.note;
  
  return (
    <div className={`my-4 rounded-md border px-3 py-2 ${styles}`}>
      {children}
    </div>
  );
}

export const callout = {
  render: 'Callout',
  attributes: {
    type: {
      type: String,
      required: false,
    },
  },
};
