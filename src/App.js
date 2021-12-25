import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import operations from "./redux/auth/auth-operations";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container";
// import HomePage from "./components/HomePage/HomePage";
// import NotFoundView from "./components/NotFoundView";
// import Register from "./components/Register";
// import Login from "./components/Login";
import AppBar from "./components/AppBar";
import { Switch } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authSelectors from "./redux/auth/auth-selector";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense  fallback={<p>Загружаем...</p>}>
            <PublicRoute path="/" exact>
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/register" exact restricted>
              <Register />
            </PublicRoute>
            <PublicRoute path="/login" exact restricted redirectTo="/contacts">
              <Login />
            </PublicRoute>
            <PrivateRoute path="/contacts" exact>
              <ContactForm />
              <Filter />
              <ContactList />
            </PrivateRoute>
            {/* <Route>
              <NotFoundView />
            </Route> */}
          </Suspense>

          {/* без публичных и приватных маршрутов */}
          {/* <Route path="/" exact>
          <HomePage />
        </Route> */}
          {/* <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route> */}
        </Switch>
      </Container>
    )
  );
}

export default App;
