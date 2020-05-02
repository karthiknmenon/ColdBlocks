// Admin & Common Routes
import Dashboard from "views/Dashboard.jsx";
import ConsumerList from "views/consumerlist.jsx";
import DistributorList from "views/distributorlist.jsx";
import SupplierList from "views/supplierlist.jsx";
import ManufacturerList from "views/manufacturerlist.jsx";
import PackageList from "views/packagelist.jsx";
import AdminTransactions from "views/adminTransactions";
import QueryPackage from "views/queryPackage"
import TemperatureDrop from "views/temperatureDrop";
import Maps from "views/Maps.jsx";
import AdminColdAR from "views/camera";
import Chart from "views/DataChart";
import vrp from "views/vrp";
// Other Actor Routes
import NormalPackageList from "views/NormalPackageList.jsx";
import ColdAR from "views/NormalCamera";
import NormalConsumerList from "views/Normalconsumerlist";
import NormalDistributorList from "views/Normaldistributorlist";
import NormalManufacturerList from "views/Normalmanufacturerlist";
import NormalSupplierList from "views/Normalsupplierlist";

import 'remixicon/fonts/remixicon.css'

// Admin Routes

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ri-dashboard-fill",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/camera",
    name: "Cold-AR",
    icon: "ri-phone-camera-fill",
    component: AdminColdAR,
    layout: "/admin"
  },
  {
    path: "/packagelist",
    name: "Package Data",
    icon: "ri-truck-fill",
    component: PackageList,
    layout: "/admin"
  },
  {
    path: "/queryPackage",
    name: "Query Package",
    icon: "ri-search-eye-line",
    component: QueryPackage,
    layout: "/admin"
  },
  {
    path: "/viewTransactions",
    name: "Transactions",
    icon: "ri-exchange-funds-fill",
    component: AdminTransactions,
    layout: "/admin"
  },
  {
    path: "/consumerdata",
    name: "Consumer Data",
    icon: "ri-user-5-fill",
    component: ConsumerList,
    layout: "/admin"
  },
  {
    path: "/distributordata",
    name: "Distributor Data",
    icon: "ri-user-2-fill",
    component: DistributorList,
    layout: "/admin"
  },
  {
    path: "/manufacturerdata",
    name: "Manufacturer Data",
    icon: "ri-user-3-fill",
    component: ManufacturerList,
    layout: "/admin"
  },
  {
    path: "/supplierdata",
    name: "Supplier Data",
    icon: "ri-user-4-fill",
    component: SupplierList,
    layout: "/admin"
  },
  {
    path: "/temperaturedrop",
    name: "Temperature Drop",
    icon: "ri-temp-cold-line",
    component: TemperatureDrop,
    layout: "/admin"
  },
  {
    path: "/chart",
    name: "Data Visualization",
    icon: "ri-bar-chart-fill",
    component: Chart,
    layout: "/admin"
  },
  {
    path: "/routing",
    name: "Optimal Routing",
    icon: "ri-route-fill",
    component: vrp,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ri-road-map-fill",
    component: Maps,
    layout: "/admin"
  },
];

// Supplier Routes

const supplierRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ri-dashboard-fill",
    component: Dashboard,
    layout: "/supplier"
  },
  {
    path: "/camera",
    name: "Cold-AR",
    icon: "ri-phone-camera-fill",
    component: ColdAR,
    layout: "/supplier"
  },
  {
    path: "/packagelist",
    name: "Package Data",
    icon: "ri-truck-fill",
    component: NormalPackageList,
    layout: "/supplier"
  },
  {
    path: "/viewTransactions",
    name: "Transactions",
    icon: "ri-exchange-funds-fill",
    component: AdminTransactions,
    layout: "/supplier"
  },
  {
    path: "/consumerdata",
    name: "Consumer Data",
    icon: "ri-user-5-fill",
    component: NormalConsumerList,
    layout: "/supplier"
  },
  {
    path: "/distributordata",
    name: "Distributor Data",
    icon: "ri-user-2-fill",
    component: NormalDistributorList,
    layout: "/supplier"
  },
  {
    path: "/manufacturerdata",
    name: "Manufacturer Data",
    icon: "ri-user-3-fill",
    component: NormalManufacturerList,
    layout: "/supplier"
  },
  {
    path: "/supplierdata",
    name: "Supplier Data",
    icon: "ri-user-4-fill",
    component: NormalSupplierList,
    layout: "/supplier"
  },
  // {
  //   path: "/chart",
  //   name: "Data Visualization",
  //   icon: "ri-bar-chart-fill",
  //   component: Chart,
  //   layout: "/supplier"
  // },
  {
    path: "/routing",
    name: "Optimal Routing",
    icon: "ri-route-fill",
    component: vrp,
    layout: "/supplier"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ri-road-map-fill",
    component: Maps,
    layout: "/supplier"
  },
];

// Consumer Routes

const consumerRoutes = [
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

// Distributor Routes
const distributorRoutes = [
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

// Manufacturer Routes

const manufacturerRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ri-dashboard-fill",
    component: Dashboard,
    layout: "/manufacturer"
  },
  {
    path: "/camera",
    name: "Cold-AR",
    icon: "ri-phone-camera-fill",
    component: ColdAR,
    layout: "/manufacturer"
  },
  {
    path: "/packagelist",
    name: "Package Data",
    icon: "ri-truck-fill",
    component: NormalPackageList,
    layout: "/manufacturer"
  },
  {
    path: "/viewTransactions",
    name: "Transactions",
    icon: "ri-exchange-funds-fill",
    component: AdminTransactions,
    layout: "/manufacturer"
  },
  {
    path: "/consumerdata",
    name: "Consumer Data",
    icon: "ri-user-5-fill",
    component: NormalConsumerList,
    layout: "/manufacturer"
  },
  {
    path: "/distributordata",
    name: "Distributor Data",
    icon: "ri-user-2-fill",
    component: NormalDistributorList,
    layout: "/manufacturer"
  },
  {
    path: "/manufacturerdata",
    name: "Manufacturer Data",
    icon: "ri-user-3-fill",
    component: NormalManufacturerList,
    layout: "/manufacturer"
  },
  {
    path: "/supplierdata",
    name: "Supplier Data",
    icon: "ri-user-4-fill",
    component: NormalSupplierList,
    layout: "/manufacturer"
  },
  // {
  //   path: "/chart",
  //   name: "Data Visualization",
  //   icon: "ri-bar-chart-fill",
  //   component: Chart,
  //   layout: "/manufacturer"
  // },
  {
    path: "/routing",
    name: "Optimal Routing",
    icon: "ri-route-fill",
    component: vrp,
    layout: "/manufacturer"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ri-road-map-fill",
    component: Maps,
    layout: "/manufacturer"
  },
];

export {dashboardRoutes, supplierRoutes, consumerRoutes, 
        distributorRoutes, manufacturerRoutes};
