import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <header className='header'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='hero'>
        <div className='overlay'>
          <h1>Hello</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
