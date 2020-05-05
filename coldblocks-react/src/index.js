
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/main.css";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import Login from "./views/login";
import * as serviceWorker from './serviceWorker'
import SupplierLayout from "layouts/Supplier.jsx";
import AdminLayout from "layouts/Admin.jsx";
import ConsumerLayout from "layouts/Consumer.jsx";
import DistributorLayout from "layouts/Distributor";
import ManufacturerLayout from "layouts/Manufacturer";

ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />      
      <Route path="/supplier" render={props => <SupplierLayout {...props} />} />
      <Route path="/consumer" render={props => <ConsumerLayout {...props} />} />
      <Route path="/distributor" render={props => <DistributorLayout {...props} />} />
      <Route path="/manufacturer" render={props => <ManufacturerLayout {...props} />} />
      <Route path="/" component={Login}/>      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.register();
