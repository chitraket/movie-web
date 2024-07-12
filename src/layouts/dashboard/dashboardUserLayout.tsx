/** @format */

import { Navigate } from "react-router-dom";
import { useAuth } from "../../hook";
import DashboardSection from "./dashboardSection";

const DashboardUserLayout = () => {

  const { success, currentUserInfo } = useAuth();

  if (!success && !currentUserInfo) {
    return <Navigate to={"/auth/login"} replace />;
  }

  return <DashboardSection/>
};

export default DashboardUserLayout;
