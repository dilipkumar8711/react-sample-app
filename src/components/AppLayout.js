import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../state/appStore";
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    //api call for login
    const data = {
      name: "Dilip kumar",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
export default AppLayout;
