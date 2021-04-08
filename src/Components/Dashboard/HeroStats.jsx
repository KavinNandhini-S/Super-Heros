import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//chart
import LineGraph from "../Stats/LineGraph.jsx";

import { Link } from "react-router-dom";
import axios from "axios";
import { jssPreset } from "@material-ui/styles";

class HeroStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [
        "Batman II",
        "Iron Man",
        "Captain America",
        "Black Widow II",
        "Supergirl",
      ],
      powerstats: [
        "intelligence",
        "strength",
        "speed",
        "durability",
        "power",
        "combat",
      ],
      data: [],
      obj: [],
    };
  }
  async componentDidMount() {
    let dataOuter = [];
    let obj = [];
    for (let i = 0; i < this.state.hero.length; i++) {
      let data = [];

      await axios
        .get(
          `https://www.superheroapi.com/api.php/113711614148392/search/${this.state.hero[i]}`
        )
        .then((response) => {
          if (response.data.response == "success") {
            //getting image
            obj.push(response.data.results[0]);

            for (let j = 0; j < this.state.powerstats.length; j++) {
              if (
                response.data.results[0].powerstats[this.state.powerstats[j]] !=
                null
              ) {
                data.push([
                  j + 1,
                  parseInt(
                    response.data.results[0].powerstats[
                      this.state.powerstats[j]
                    ]
                  ),
                ]);
              } else {
                data.push([j + 1, 0]);
              }
            }
          }
        });

      dataOuter.push({ label: this.state.hero[i], data });
    }
    this.setState({ data: dataOuter });
    this.setState({ obj: obj });
  }
  render() {
    return (
      <div style={{ marginTop: "5%" }}>
        {console.log(this.state.data)}
        <h5
          style={{ color: "#9c27b0", fontWeight: "bold", textAlign: "Center" }}
        >
          Stats on favorite super heros...
        </h5>
        <hr />
        <Container>
          <Row>
            <Col md={9} sm={12} xs={12}>
              <LineGraph data={this.state.data} />
            </Col>
            <Col md={3} sm={12} xs={12}>
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
                    <ol>
                      <li>1. Intelligence</li>
                      <li>2. Strength</li>
                      <li>3. Speed</li>
                      <li>4. Durability</li>
                      <li>5. Power</li>
                      <li>6. Combat</li>
                    </ol>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <span class="dot" style={{ backgroundColor: "#d9534f" }}></span>{" "}
              Batman &emsp;
              <span
                class="dot"
                style={{ backgroundColor: "#0275d8" }}
              ></span>{" "}
              Iron Man &emsp;
              <span
                class="dot"
                style={{ backgroundColor: "#f0ad4e" }}
              ></span>{" "}
              Captain America &emsp;
              <span
                class="dot"
                style={{ backgroundColor: "orange" }}
              ></span>{" "}
              Black Widow &emsp;
              <span
                class="dot"
                style={{ backgroundColor: "#5cb85c" }}
              ></span>{" "}
              Super Girl &emsp;
            </Col>
          </Row>
          <hr />
          <br />
          <h5
            style={{
              textAlign: "center",
              color: "#9c27b0",
              fontWeight: "bold",
            }}
          >
            Some of your favourite heros
          </h5>
          <hr />
          <Row>
            {this.state.obj.map((hero, index) => (
              <Col md={3} sm={6} xs={12}>
                <Link
                  to={{ pathname: "/dashboard/viewhero", hero: hero }}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Card className="heroCard">
                    <Card.Img variant="top" src={hero.image.url} />
                    <Card.Body>
                      <Card.Title>{hero.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default HeroStats;
