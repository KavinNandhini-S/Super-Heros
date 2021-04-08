import React from "react";
import "./style.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import DashboardIcon from "@material-ui/icons/Dashboard";

import logo from "../Dashboard/logo.png";

import { Container, Row, Col, Card,Button } from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        img:''
    }
  }

  async componentDidMount(){

      await axios
      .get(`https://www.superheroapi.com/api.php/113711614148392/149/image`)
      .then((response) => {
        if(response.data.response == "success"){
            this.setState({img:response.data.url})
          
        }
      });
    }
  render() {
    return (
      <div className="background">
        <br />
        <Container>
          <Row>
            <Col md={10} sm={10} xs={10}>
              <h6 style={{ color: "white", marginLeft: "-10%" }}>
                <img src={logo} />
                &nbsp; SUPER HEROS
              </h6>
            </Col>
            <Col className="nav">
            <Link to="/dashboard/herostats" style={{color:"white"}}>
              <li>
                <DashboardIcon />
              </li>
              </Link>
              &emsp;&emsp;
              <li>
                <FacebookIcon />
              </li>
              &emsp;&emsp;
              <li>
                <TwitterIcon />
              </li>
              &emsp;&emsp;
            </Col>
          </Row>
        </Container>
        {/* inline css */}
        <Container>
          <Row>
            <Col md={9} sm={12} xs={12}>
              <div style={{ marginTop: "20%",marginBottom:"10%", color: "white" }}>
                <h2 style={{ fontWeight: "bold" }}>SUPER HEROS</h2>
                <br />
                <h4> With great power, comes great responsibility <br/>
               
                </h4>
                <br/>
               
              </div>
              <div style={{color:"white"}}>
              <label>Join with us to get to know about all super heros...and have a great fun</label>&emsp;&emsp;
                <Link to="/dashboard/herostats">
                <Button >Join Us</Button>
                </Link>
              </div>
            </Col>
           
            <Col md={3} sm={3} xs={12}>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "35%",
                }}
              >
                <Card>
                <Card.Img variant="top" src={this.state.img} />
                  <Card.Body>
                  
                    <Card.Title>Captain America</Card.Title>
                    
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default HomePage;
