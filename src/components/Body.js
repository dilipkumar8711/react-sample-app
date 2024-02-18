import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react"; //named import
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.2958104&lng=76.6393805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const data = await json?.data?.cards[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    setRestaurantList(data);
    setFilteredList(data);
  };
  const topRated = () => {
    const filtered = restaurantList.filter((res) => res.info.avgRating > 4);
    setFilteredList(filtered);
  };
  const onSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const onSearch = () => {
    const searched = restaurantList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredList(searched);
  };
  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

  if (restaurantList.length === 0) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="m-4">
      <div className="flex my-2">
        <input
          className="mr-4 px-2 w-60 border border-gray-600 bg-black-100"
          onChange={onSearchText}
          value={searchText}
          type="text"
          placeholder="Search"
        />
        <button
          className="mr-4 py-2 px-4 border-2 bg-green-100 rounded-lg"
          onClick={onSearch}
        >
          Search
        </button>
        <button
          className="mr-4 py-2 px-4 border-2 bg-blue-100 rounded-lg"
          onClick={topRated}
        >
          Top Rated Restaurants
        </button>
        <input
          className="mr-4 px-2 w-60 border border-gray-600 bg-black-100"
          onChange={(e) => setUserName(e.target.value)}
          value={loggedInUser}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((res) => (
          <div key={res.info.id} className="flex">
            <Link className="mb-4" to={"/restaurant/" + res.info.id}>
              {res.info.avgRating > 4.4 ? (
                <RestaurantCardWithPromoted resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
