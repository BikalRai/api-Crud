import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='primary__nav container'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </nav>
  );
};

export default Navbar;
