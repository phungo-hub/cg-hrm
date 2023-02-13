import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectUser } from "../features/userSlice";
import { checkAdminRole } from "../utils/roleCheck";

function PrivateRoute({ role }) {
  const currentUser = useSelector(selectUser);
  console.log("currentUser", currentUser);
  const isAdmin = checkAdminRole(currentUser.RoleName[0]);
  if (role && !isAdmin) return <Navigate to="/" />;
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
