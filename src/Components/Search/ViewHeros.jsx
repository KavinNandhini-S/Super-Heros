import { TabScrollButton } from "@material-ui/core";
import React from "react";
import { Container, Row, Col, Card, Tab, Tabs } from "react-bootstrap";
class ViewHeros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: props.location.hero,
      connections: [],
      relative: [],
      base: [],
      occupation: [],
    };
  }

  componentDidMount() {
    this.setState(
      (this.state.connections = this.props.location.hero.connections[
        "group-affiliation"
      ].split(","))
    );
    this.setState(
      (this.state.relative = this.props.location.hero.connections[
        "relatives"
      ].split(","))
    );
    this.setState(
      (this.state.base = this.props.location.hero.work.base.split(","))
    );
    this.setState(
      (this.state.occupation = this.props.location.hero.work.occupation.split(
        ","
      ))
    );
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
                    <div style={{ marginTop: "1%", padding: "10%" }}>
                      <Card className="heroCard">
                        <Card.Header
                          style={{ backgroundColor: "#9c27b0", color: "white" }}
                        >
                          <Card.Title style={{ textAlign: "center" }}>
                            Power Stats
                          </Card.Title>
                        </Card.Header>
                        <Card.Body
                          style={{
                            backgroundColor: "rgb(242, 216, 252)",
                            padding: "5%",
                          }}
                        >
                          <Card.Text>
                            <Container>
                              <Row>
                                <Col md={4} sm={4} xs={4}>
                                Intelligence
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                  <div
                                    style={{
                                      background: "white",
                                     
                                    }}
                                  >
                                    <div
                                      className="skills"
                                      style={{
                                        width: parseInt(
                                          this.state.heros.powerstats.intelligence * 2
                                          // width is 200 it is multiplied by 2
                                        ),
                                      }}
                                    ></div>
                                  </div>
                                  
                                </Col>
                                <Col md={2} sm={2} xs={2}>
                                {this.state.heros.powerstats.intelligence}
                                </Col>
                              </Row>
                              <br/>

                              <Row>
                                <Col md={4} sm={4} xs={4}>
                                Strength
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                  <div
                                    style={{
                                      background: "white",
                                     
                                    }}
                                  >
                                    <div
                                      className="skills"
                                      style={{
                                        width: parseInt(
                                          this.state.heros.powerstats.strength * 2
                                        ),
                                      }}
                                    ></div>
                                  </div>
                                  
                                </Col>
                                <Col md={2} sm={2} xs={2}>
                                {this.state.heros.powerstats.strength}
                                </Col>
                              </Row>
                              <br/>

                              <Row>
                                <Col md={4} sm={4} xs={4}>
                                Speed
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                  <div
                                    style={{
                                      background: "white",
                                     
                                    }}
                                  >
                                    <div
                                      className="skills"
                                      style={{
                                        width: parseInt(
                                          this.state.heros.powerstats.speed * 2
                                        ),
                                      }}
                                    ></div>
                                  </div>
                                  
                                </Col>
                                <Col md={2} sm={2} xs={2}>
                                {this.state.heros.powerstats.speed}
                                </Col>
                              </Row>
                              <br/>

                              <Row>
                                <Col md={4} sm={4} xs={4}>
                                Durability
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                  <div
                                    style={{
                                      background: "white",
                                      
                                    }}
                                  >
                                    <div
                                      className="skills"
                                      style={{
                                        width: parseInt(
                                          this.state.heros.powerstats.durability * 2
                                        ),
                                      }}
                                    ></div>
                                  </div>
                                  
                                </Col>
                                <Col md={2} sm={2} xs={2}>
                                {this.state.heros.powerstats.durability}
                                </Col>
                              </Row>
                              <br/>

                              <Row>
                                <Col md={4} sm={4} xs={4}>
                                Power
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                  <div
                                    style={{
                                      background: "white",
                                      
                                    }}
                                  >
                                    <div
                                      className="skills"
                                      style={{
                                        width: parseInt(
                                          this.state.heros.powerstats.power * 2
                                        ),
                                      }}
                                    ></div>
                                  </div>
                                  
                                </Col>
                                <Col md={2} sm={2} xs={2}>
                                {this.state.heros.powerstats.power}
                                </Col>
                              </Row>
                              <br/>

                              <Row>
                                <Col md={4} sm={4} xs={4}>
                                Combat
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                  <div
                                    style={{
                                      background: "white",
                                      
                                    }}
                                  >
                                    <div
                                      className="skills"
                                      style={{
                                        width: parseInt(
                                          this.state.heros.powerstats.combat * 2
                                        )
                                      }}
                                    ></div>
                                  </div>
                                  
                                </Col>
                                <Col md={2} sm={2} xs={2}>
                                {this.state.heros.powerstats.combat}

                                </Col>
                              </Row>
                              <br/>
                            </Container>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab>
                  <Tab eventKey="biography" title="Biography">
                    <div style={{ marginTop: "1%", padding: "10%" }}>
                      <Card className="heroCard">
                        <Card.Header
                          style={{ backgroundColor: "#9c27b0", color: "white" }}
                        >
                          <Card.Title style={{ textAlign: "center" }}>
                            Biography
                          </Card.Title>
                        </Card.Header>
                        <Card.Body
                          style={{
                            backgroundColor: "rgb(242, 216, 252)",
                            padding: "5%",
                          }}
                        >
                          <Card.Text>
                            <table>
                              <tr>
                                <td>Full Name</td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.heros.biography["full-name"]}
                                </td>
                              </tr>
                              <tr>
                                <td>Alter Egos</td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.heros.biography["alter-egos"]}
                                </td>
                              </tr>
                              <tr>
                                <td>Aliases</td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.heros.biography.aliases.map(
                                    (aliase, index) => (
                                      <li>{aliase}</li>
                                    )
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <td>Place of Birth </td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.heros.biography["place-of-birth"]}
                                </td>
                              </tr>
                              <tr>
                                <td>First Appearance</td>
                                <td> :&emsp; </td>
                                <td>
                                  {
                                    this.state.heros.biography[
                                      "first-appearance"
                                    ]
                                  }
                                </td>
                              </tr>
                              <tr>
                                <td>Publisher </td>
                                <td> :&emsp; </td>
                                <td>{this.state.heros.biography.publisher}</td>
                              </tr>
                              <tr>
                                <td>Alignment </td>
                                <td> :&emsp; </td>
                                <td>{this.state.heros.biography.alignment}</td>
                              </tr>
                            </table>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab>
                  <Tab eventKey="appearance" title="Appearance">
                    <div style={{ marginTop: "1%", padding: "10%" }}>
                      <Card className="heroCard">
                        <Card.Header
                          style={{ backgroundColor: "#9c27b0", color: "white" }}
                        >
                          <Card.Title style={{ textAlign: "center" }}>
                            Appearance
                          </Card.Title>
                        </Card.Header>
                        <Card.Body
                          style={{
                            backgroundColor: "rgb(242, 216, 252)",
                            padding: "5%",
                          }}
                        >
                          <Card.Text>
                            <table>
                              <tr>
                                <td>Gender </td>
                                <td> :&emsp; </td>
                                <td>{this.state.heros.appearance.gender}</td>
                              </tr>
                              <tr>
                                <td>Race</td>
                                <td> :&emsp; </td>
                                <td>{this.state.heros.appearance.race}</td>
                              </tr>
                              <tr>
                                <td>Height </td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.heros.appearance.height[0] +
                                    " , " +
                                    this.state.heros.appearance.height[1]}
                                </td>
                              </tr>
                              <tr>
                                <td>Weight </td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.heros.appearance.weight[0] +
                                    " , " +
                                    this.state.heros.appearance.weight[1]}
                                </td>
                              </tr>
                              <tr>
                                <td>Eye Color </td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.heros.appearance["eye-color"]}
                                </td>
                              </tr>
                              <tr>
                                <td>Hair Color </td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.heros.appearance["hair-color"]}
                                </td>
                              </tr>
                            </table>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab>
                  <Tab eventKey="work" title="Work">
                    <div style={{ marginTop: "1%", padding: "10%" }}>
                      <Card className="heroCard">
                        <Card.Header
                          style={{ backgroundColor: "#9c27b0", color: "white" }}
                        >
                          <Card.Title style={{ textAlign: "center" }}>
                            Work
                          </Card.Title>
                        </Card.Header>
                        <Card.Body
                          style={{
                            backgroundColor: "rgb(242, 216, 252)",
                            padding: "5%",
                          }}
                        >
                          <Card.Text>
                            <table>
                              <tr>
                                <td>Occupation </td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.occupation.map(
                                    (connect, index) => (
                                      <li>{connect},</li>
                                    )
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <td>Base of operation </td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.base.map((connect, index) => (
                                    <li>{connect},</li>
                                  ))}
                                </td>
                              </tr>
                            </table>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab>
                  <Tab eventKey="connections" title="Connections">
                    <div style={{ marginTop: "1%", padding: "10%" }}>
                      <Card className="heroCard">
                        <Card.Header
                          style={{ backgroundColor: "#9c27b0", color: "white" }}
                        >
                          <Card.Title style={{ textAlign: "center" }}>
                            Connections
                          </Card.Title>
                        </Card.Header>
                        <Card.Body
                          style={{
                            backgroundColor: "rgb(242, 216, 252)",
                            padding: "5%",
                          }}
                        >
                          <Card.Text>
                            <table>
                              <tr>
                                <td>Group Affiliation </td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.connections.map(
                                    (connect, index) => (
                                      <li>{connect}</li>
                                    )
                                  )}
                                </td>
                              </tr>
                              <br />
                              <tr>
                                <td>Relatives</td>
                                <td> :&emsp; </td>
                                <td>
                                  {this.state.relative.map((connect, index) => (
                                    <li>{connect}</li>
                                  ))}
                                </td>
                              </tr>
                            </table>
                          </Card.Text>
                        </Card.Body>
                      </Card>
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
