import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../state/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const clearItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-2 p2 w-8/12 mx-auto">
      <div className="p-2 m-2 flex">
        <h1 className="w-11/12 font-bold text-4xl">Cart</h1>
        <button
          onClick={clearItems}
          className="w-1/12 m-2 bg-red-500 px-4 py-3 text-white rounded-xl"
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h1 className="font-bold text-2xl">
          Your Cart is Empty.. Please Add items to you Cart
        </h1>
      ) : (
        <div className="">
          {cartItems.map((item) => (
            <ItemList key={item?.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Cart;
