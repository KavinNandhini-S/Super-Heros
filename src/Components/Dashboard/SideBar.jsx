import React from "react";

import { Redirect, Link } from "react-router-dom";
import "./styles.css";
import Hidden from "@material-ui/core/Hidden";
import axios from "axios";
//icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import SearchIcon from "@material-ui/icons/Search";

//logo
import logo from "./logo.png";
import { colors } from "@material-ui/core";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: "#9c27b0",
      search: "transparent",
    };
  }
  colors = (props) => {
    if (props == "stats") {
      this.setState({
        stats: "#9c27b0",
        search: "transparent",
      });
    } else {
      this.setState({
        search: "#9c27b0",
        stats: "transparent",
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <Hidden only="xs">
            <div className="sidebar">
              {/* Side Bar Items */}
              <ul style={{ marginTop: "13%" }}>
                <h5>
                  <img src={logo} />
                  &nbsp; SUPER HEROS
                </h5>
                <hr />
                {/* Retains Color on select */}
                <li
                  onClick={() => {
                    this.colors("stats");
                  }}
                  style={{ backgroundColor: this.state.stats }}
                >
                  <Link to="/dashboard/herostats">
                    <DashboardIcon />
                    <label>Dashboard</label>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    this.colors("search");
                  }}
                  style={{ backgroundColor: this.state.search }}
                >
                  <Link to="/dashboard/herosearch">
                    <SearchIcon />
                    <label>Hero Search</label>
                  </Link>
                </li>
              </ul>
            </div>
          </Hidden>
        </div>
      </div>
    );
  }
}

export default SideBar;
