import React from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <nav>nav</nav>
      <div>
        <Outlet />
      </div>
      <footer>footer</footer>
    </>
  );
}

export default AppLayout;
