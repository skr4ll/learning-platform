import React, { useState } from 'react';

const Accordion = ({ title, children, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '10px',
          textAlign: 'left',
          border: 'none',
          backgroundColor: 'bg-uzk-dark',
          text: 'white',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        {title} {isOpen ? '-' : '+'}
      </button>
      {isOpen && (
        <div style={{ padding: '10px', backgroundColor: 'uzuk-dark/light' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export const AccordionItem = ({ children, value }) => {
  return <div>{children}</div>;
};

export const AccordionTrigger = ({ children }) => {
  return <div>{children}</div>;
};

export const AccordionContent = ({ children }) => {
  return <div>{children}</div>;
};

export default Accordion;