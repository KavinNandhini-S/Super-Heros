import React from "react";
import Sidebar from "../Dashboard/SideBar.jsx";
import Navbar from "../Navbar/nav";
import { Container, Row, Col } from "react-bootstrap";
// routing
import {Switch,Route,Redirect} from "react-router-dom";
import routes from "../../routes.js"


const switchRoutes = (
    <Switch>
      
      {routes.map((prop, key) => {
        
        if (prop.layout === "/dashboard") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/dashboard" to="/dashboard/herostats" />
    </Switch>
  );

function Layout(props) {
  return (
    <div >
      <Navbar />
      <Container >
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col md ={10} sm={10}>
          <div >
            <br/>
            <div>{switchRoutes}</div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
