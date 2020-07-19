import Orders from "../view/admin/Orders";
import MyAddresses from "../view/admin/MyAddresses";
import MyLuggages from "../view/admin/MyLuggages";
import MyInfo from "../view/admin/MyInfo";

const adminRouterList = [
  { path: "/admin/orders", name: "Orders", component: Orders, exact: true },
  {
    path: "/admin/addresses",
    name: "MyAddresses",
    component: MyAddresses,
    exact: true
  },
  {
    path: "/admin/luggages",
    name: "MyLuggages",
    component: MyLuggages,
    exact: true
  },
  {
    path: "/admin/info",
    name: "MyInfo",
    component: MyInfo,
    exact: true
  }
  // {
  //   path: "/admin/searchresult",
  //   name: "SearchResult",
  //   component: SearchResult,
  //   exact: true
  // }
];

export default adminRouterList;
