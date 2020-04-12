
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
    layout: "/consumer"
  },
  {
    path: "/camera",
    name: "Cold-AR",
    icon: "ri-phone-camera-fill",
    component: ColdAR,
    layout: "/consumer"
  },
  {
    path: "/packagelist",
    name: "Package Data",
    icon: "ri-truck-fill",
    component: NormalPackageList,
    layout: "/consumer"
  },
  {
    path: "/viewTransactions",
    name: "Transactions",
    icon: "ri-exchange-funds-fill",
    component: AdminTransactions,
    layout: "/consumer"
  },
  {
    path: "/consumerdata",
    name: "Consumer Data",
    icon: "ri-user-5-fill",
    component: NormalConsumerList,
    layout: "/consumer"
  },
  {
    path: "/distributordata",
    name: "Distributor Data",
    icon: "ri-user-2-fill",
    component: NormalDistributorList,
    layout: "/consumer"
  },
  {
    path: "/manufacturerdata",
    name: "Manufacturer Data",
    icon: "ri-user-3-fill",
    component: NormalManufacturerList,
    layout: "/consumer"
  },
  {
    path: "/supplierdata",
    name: "Supplier Data",
    icon: "ri-user-4-fill",
    component: NormalSupplierList,
    layout: "/consumer"
  },
  // {
  //   path: "/chart",
  //   name: "Data Visualization",
  //   icon: "ri-bar-chart-fill",
  //   component: Chart,
  //   layout: "/consumer"
  // },
  {
    path: "/routing",
    name: "Optimal Routing",
    icon: "ri-route-fill",
    component: vrp,
    layout: "/consumer"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ri-road-map-fill",
    component: Maps,
    layout: "/consumer"
  },
];

export default dashboardRoutes;
