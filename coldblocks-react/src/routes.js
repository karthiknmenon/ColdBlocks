
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import ConsumerList from "views/consumerlist.jsx";
import DistributorList from "views/distributorlist.jsx";
import SupplierList from "views/supplierlist.jsx";
import ManufacturerList from "views/manufacturerlist.jsx";
import PackageList from "views/packagelist.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import WebcamCapture from "views/camera"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/camera",
    name: "Cold-AR",
    // icon: "pe-7s-user",
    component: WebcamCapture,
    layout: "/admin"
  },
  {
    path: "/packagelist",
    name: "Package Data",
    // icon: "pe-7s-note2",
    component: PackageList,
    layout: "/admin"
  },
  {
    path: "/consumerdata",
    name: "Consumer Data",
    // icon: "pe-7s-note2",
    component: ConsumerList,
    layout: "/admin"
  },
  {
    path: "/distributordata",
    name: "Distributor Data",
    // icon: "pe-7s-note2",
    component: DistributorList,
    layout: "/admin"
  },
  {
    path: "/supplierdata",
    name: "Supplier Data",
    // icon: "pe-7s-note2",
    component: SupplierList,
    layout: "/admin"
  },
  {
    path: "/manufacturerdata",
    name: "Manufacturer Data",
    // icon: "pe-7s-note2",
    component: ManufacturerList,
    layout: "/admin"
  },
  {
    path: "/submitForm",
    name: "Submit Form",
    // icon: "pe-7s-note2",
    component: UserProfile,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
