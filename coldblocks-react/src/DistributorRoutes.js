
import Dashboard from "views/Dashboard.jsx";
import NormalPackageList from "views/NormalPackageList.jsx";
import AdminTransactions from "views/adminTransactions";
import Maps from "views/Maps.jsx";
import ColdAR from "views/camera";
import Chart from "views/DataChart";
import vrp from "views/vrp";
import 'remixicon/fonts/remixicon.css'
import NormalConsumerList from "views/Normalconsumerlist";
import NormalDistributorList from "views/Normaldistributorlist";
import NormalManufacturerList from "views/Normalmanufacturerlist";
import NormalSupplierList from "views/Normalsupplierlist";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ri-dashboard-fill",
    component: Dashboard,
    layout: "/distributor"
  },
  {
    path: "/camera",
    name: "Cold-AR",
    icon: "ri-phone-camera-fill",
    component: ColdAR,
    layout: "/distributor"
  },
  {
    path: "/packagelist",
    name: "Package Data",
    icon: "ri-truck-fill",
    component: NormalPackageList,
    layout: "/distributor"
  },
  {
    path: "/viewTransactions",
    name: "Transactions",
    icon: "ri-exchange-funds-fill",
    component: AdminTransactions,
    layout: "/distributor"
  },
  {
    path: "/consumerdata",
    name: "Consumer Data",
    icon: "ri-user-5-fill",
    component: NormalConsumerList,
    layout: "/distributor"
  },
  {
    path: "/distributordata",
    name: "Distributor Data",
    icon: "ri-user-2-fill",
    component: NormalDistributorList,
    layout: "/distributor"
  },
  {
    path: "/manufacturerdata",
    name: "Manufacturer Data",
    icon: "ri-user-3-fill",
    component: NormalManufacturerList,
    layout: "/distributor"
  },
  {
    path: "/supplierdata",
    name: "Supplier Data",
    icon: "ri-user-4-fill",
    component: NormalSupplierList,
    layout: "/distributor"
  },
  // {
  //   path: "/chart",
  //   name: "Data Visualization",
  //   icon: "ri-bar-chart-fill",
  //   component: Chart,
  //   layout: "/distributor"
  // },
  {
    path: "/routing",
    name: "Optimal Routing",
    icon: "ri-route-fill",
    component: vrp,
    layout: "/distributor"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ri-road-map-fill",
    component: Maps,
    layout: "/distributor"
  },
];

export default dashboardRoutes;
