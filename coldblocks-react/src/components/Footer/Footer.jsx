
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://www.coldblocks.tech">Company</a>
              </li>
              <li>
                <a href="https://docs.coldblocks.tech">Docs</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            ColdDash by <a href="https://www.coldblocks.tech">ColdBlocks</a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
