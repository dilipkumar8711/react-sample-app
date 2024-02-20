import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../state/appStore";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex py-6 justify-between shadow-md bg-pink-100">
      <div className="w-56 p-4 align-middle">
        <img src="../logo.jpg" alt="logo" />
      </div>
      <div className="nav">
        <ul className="flex mx-4 align-middle text-2xl">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">Logged In User: {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
