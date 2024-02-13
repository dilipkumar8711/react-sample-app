import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="../logo.jpg" alt="logo" />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
