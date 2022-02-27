import { Navigate, Outlet } from "react-router-dom";
import { UseAuthStatus } from "../hooks/UseAuthStatus";
import Home from "../pages/Home";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = UseAuthStatus;
  console.log("loggedIn", loggedIn);
  console.log("checkingStatus", loggedIn);
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Home />;
};

export default PrivateRoute;
