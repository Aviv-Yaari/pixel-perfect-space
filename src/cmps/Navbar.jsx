import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/img/shared/logo.svg';
export function Navbar() {
  return (
    <nav className="navbar flex space-between align-center align-center">
      <Logo className="logo" />
      <ol className="flex">
        <NavLink to="/">01 Home</NavLink>
        <NavLink to="/destination">02 Destination</NavLink>
        <NavLink to="/crew">03 Crew</NavLink>
        <li>04 Technology</li>
      </ol>
    </nav>
  );
}
