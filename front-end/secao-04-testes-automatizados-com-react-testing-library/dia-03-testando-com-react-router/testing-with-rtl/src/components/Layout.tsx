import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Início</NavLink>
        <br />
        <NavLink to="/about">Sobre</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
