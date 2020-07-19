// import React from "react";
// const Home = React.lazy(() => import("../view/Home"));
// const Service = React.lazy(() => import("../view/Service"));
// const Price = React.lazy(() => import("../view/Price"));
// const Auth = React.lazy(() => import("../view/auth"));
// const UserDetail = React.lazy(() => import("../view/auth/UserDetail"));
import Home from "../view/Home";
import Price from "../view/Price";
import Auth from "../view/auth";
import UserDetail from "../view/auth/UserDetail";
import SearchResult from "../view/searchResult";
import Reservation from "../view/reservation";
import NotFound from "../view/NotFound";
import Admin from "../view/admin";

// import { Redirect, Route } from "react-router-dom";

// const PrivateRoute = ({ component: Component, roles, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => {
//       const isAuthTokenValid = isUserAuthenticated();
//       if (!isAuthTokenValid) {
//         // not logged in so redirect to login page with the return url
//         return (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         );
//       }

//       const loggedInUser = getLoggedInUser();
//       // check if route is restricted by role
//       if (roles && roles.indexOf(loggedInUser.role) === -1) {
//         // role not authorised so redirect to home page
//         return <Redirect to={{ pathname: "/" }} />;
//       }

//       // authorised so return component
//       return <Component {...props} />;
//     }}
//   />
// );

const routerList = [
  {
    path: "/",
    name: "Service",
    component: Home,
    exact: true
  },
  // { path: "/service", name: "Service", component: Service, exact: false },
  { path: "/price", name: "Price", component: Price, exact: false },
  { path: "/auth", name: "Auth", component: Auth, exact: false },
  {
    path: "/signup/userdetail",
    name: "UserDetail",
    component: UserDetail,
    exact: false
  },
  {
    path: "/service/searchresult",
    name: "SearchResult",
    component: SearchResult,
    exact: false
  },
  {
    path: "/service/reservation",
    name: "Reservation",
    component: Reservation,
    exact: false
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    exact: false
  },
  { path: "*", name: "NotFound", component: NotFound, exact: true }
];

export default routerList;
