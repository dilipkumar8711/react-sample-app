import Header from "./Header"; //default import
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; //named import

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
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
  if (restaurantList.length === 0) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container">
      <div className="filter-container">
        <input onChange={onSearchText} value={searchText} type="text" />
        <button onClick={onSearch}>Search</button>
        <button onClick={topRated}>Top Rated Restaurants</button>
      </div>
      <div className="card-container">
        {filteredList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
