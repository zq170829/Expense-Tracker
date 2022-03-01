import { Outlet } from "react-router-dom";
import { UseAuthStatus } from "../hooks/UseAuthStatus";
import Spinner from "./Spinner";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = UseAuthStatus;
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Dashboard />;
};

export default PrivateRoute;
