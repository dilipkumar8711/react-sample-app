import { useDispatch } from "react-redux";
import { addItem } from "../state/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const clickHandler = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="m-2 border-b-2 flex">
      <div className="w-11/12">
        <h3 className=" font-bold text-xl p-1 ">{item.name}</h3>
        <h4 className=" font-bold text-lg p-1">
          ₹ - {item.price / 100 || item.defaultPrice / 100}
        </h4>
        <p className="text-sm px-1 py-2">{item.description}</p>
      </div>
      <div className="w-1/12 align-middle">
        <button
          className="border bottom-2 py-2 px-6 bg-blue-500 text-white rounded-xl"
          type="button"
          onClick={() => clickHandler(item)}
        >
          Add+
        </button>
      </div>
    </div>
  );
};
export default ItemList;
