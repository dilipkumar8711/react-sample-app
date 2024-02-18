import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Dilip kumar",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
export default AppLayout;
