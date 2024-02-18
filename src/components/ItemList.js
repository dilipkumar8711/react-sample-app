const ItemList = ({ item }) => {
  return (
    <div className="m-2 border-b-2">
      <h3 className=" font-bold text-xl p-1 ">{item.name}</h3>
      <h4 className=" font-bold text-lg p-1">
        ₹ - {item.price / 100 || item.defaultPrice / 100}
      </h4>
      <p className="text-sm px-1 py-2">{item.description}</p>
    </div>
  );
};
export default ItemList;
