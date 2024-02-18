import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4">
        <div
          onClick={handleClick}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && (
          <div className="text-left">
            {data.itemCards.map((item) => (
              <ItemList key={item?.card?.info?.id} item={item?.card?.info} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
