const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.info;
  return (
    <div className="card m-2 pt-7 pr-2 pl-2 pb-2 w-[250px] h-[100%] flex bg-white hover:bg-blue-50">
      <div className="image"></div>
      <div className="details">
        <h3 className="text-xl text-slate-950">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black rounded-lg text-white px-2 py-1 justify-items-end">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
