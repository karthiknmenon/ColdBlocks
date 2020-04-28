
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
                <a href="https://colddash.netlify.com">Company</a>
              </li>
              <li>
                <a href="https://colddocs.netlify.com">Docs</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            ColdDash by <a href="#">ColdBlocks</a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
