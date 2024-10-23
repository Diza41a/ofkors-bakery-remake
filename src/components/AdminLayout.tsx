import { useContext, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../contexts/global";
import { validateAdminAuthentication } from "../api/authMethods.api";

const AdminLayout = (): JSX.Element => {
  const {
    authState: [, setIsAdminLoggedIn],
    pageLoadingState: [, setIsPageLoading]
  } = useContext(GlobalContext);

  useLayoutEffect(() => {
    setIsPageLoading(true);

    validateAdminAuthentication()
      .then(() => setIsAdminLoggedIn(true))
      .catch(() => {})
      .finally(() => setIsPageLoading(false));
  }, [setIsAdminLoggedIn, setIsPageLoading]);

  return (
    <Outlet />
  );
};

export default AdminLayout;
