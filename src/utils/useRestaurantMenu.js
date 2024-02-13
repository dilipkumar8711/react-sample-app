import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
    return () => {
      console.log("clean up activities");
    }; // this method is like ngOnDestroy in angular
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.2958104&lng=76.6393805&restaurantId=" +
        resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
