import { TabScrollButton } from "@material-ui/core";
import React from "react";
import { Container, Row, Col, Card, Tab, Tabs } from "react-bootstrap";
class ViewHeros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: props.location.hero,
    };
  }
  render() {
    return (
      <div>
        <Container style={{ marginTop: "5%" }}>
          <Row>
            <Col md={4} xs={12} sm={4}>
              <Card className="heroCard">
                <Card.Img variant="top" src={this.state.heros.image.url} />
                <Card.Body
                  style={{
                    backgroundColor: "#9c27b0",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <Card.Title>{this.state.heros.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8} sm={8} xs={12}>
              <Card>
                <Tabs
                  defaultActiveKey="powerstats"
                  id="uncontrolled-tab-example"
                  style={{ marginLeft: "5%" }}
                >
                  <Tab eventKey="powerstats" title="Power Stats">
                    <div style={{ marginTop: "8%" }}>
                      <h5 style={{ textAlign: "center" }}>Power Stats</h5>
                      <hr />
                      
                        <Card className="container" >
                          <div className="skills" style={{width:this.state.heros.powerstats.intellignece+"%"}}></div>
                        </Card>
                     
                    {console.log(this.state.heros.powerstats)}
                    </div>
                  </Tab>
                  <Tab eventKey="biography" title="Biography">
                    <div style={{ marginTop: "8%" }}>
                      <h5 style={{ textAlign: "center" }}>Biography</h5>
                      <hr />
                    </div>
                  </Tab>
                  <Tab eventKey="appearance" title="Appearance">
                    <div style={{ marginTop: "8%" }}>
                      <h5 style={{ textAlign: "center" }}>Appearance</h5>
                      <hr />
                    </div>
                  </Tab>
                  <Tab eventKey="work" title="Work">
                    <div style={{ marginTop: "8%" }}>
                      <h5 style={{ textAlign: "center" }}>Work</h5>
                      <hr />
                    </div>
                  </Tab>
                  <Tab eventKey="connections" title="Connections">
                    <div style={{ marginTop: "8%" }}>
                      <h5 style={{ textAlign: "center" }}>Connections</h5>
                      <hr />
                    </div>
                  </Tab>
                </Tabs>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ViewHeros;
