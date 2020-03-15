
import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            {/* <i className="fa fa-dashboard" /> */}
            <p className="hidden-lg hidden-md">ColdDash</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="/login">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
