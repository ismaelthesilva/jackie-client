import React from 'react';

function noNavbar({ children }) {
  return (
    <div>
      {/* No Navbar here */}
      {children} {/* Render the page content */}
    </div>
  );
}

export default noNavbar;