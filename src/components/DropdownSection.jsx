import React, { useState } from 'react';

const DropdownSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-section">
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        {open ? '🔼' : '🔽'} {title}
      </div>
      <div className={`dropdown-body ${open ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default DropdownSection;
