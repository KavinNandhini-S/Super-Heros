import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

import Axios from "axios";
import axios from "axios";

//icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <div class="my-2 my-lg-0">
            <Link to="/">
            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit"> 
             <HomeIcon style={{color:"white"}}/>
             </button>
             </Link>
            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit"> 
             <PersonIcon style={{color:"white"}}/>
             </button>
              <button class="btn btn-outline-dark my-2 my-sm-0" type="submit"> 
             <NotificationsIcon style={{color:"white"}}/>
             </button>
         
             
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
