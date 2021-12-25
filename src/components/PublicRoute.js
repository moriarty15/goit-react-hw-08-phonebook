import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selector";

export default function PublicRoute({
  children,
    restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}