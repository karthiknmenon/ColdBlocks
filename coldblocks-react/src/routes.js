
import Dashboard from "views/Dashboard.jsx";
import ConsumerList from "views/consumerlist.jsx";
import DistributorList from "views/distributorlist.jsx";
import SupplierList from "views/supplierlist.jsx";
import ManufacturerList from "views/manufacturerlist.jsx";
import PackageList from "views/packagelist.jsx";
import AdminTransactions from "views/adminTransactions";
import TemperatureDrop from "views/temperatureDrop";
import Maps from "views/Maps.jsx";
import ColdAR from "views/camera";
import Chart from "views/DataChart";
import vrp from "views/vrp";
import 'remixicon/fonts/remixicon.css'

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
    component: ColdAR,
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

export default dashboardRoutes;
