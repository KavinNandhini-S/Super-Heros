import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

//axios
import axios from "axios";

class heroSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      object: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.length > 2) {
      this.search(e.target.value);
    }
  };

  handleClick = (e) => {
    if (this.state.name.length > 2) {
      this.search(this.state.name);
    }
  };
  search = async (string) => {
    await axios
      .get(
        `https://www.superheroapi.com/api.php/113711614148392/search/${string}`
      )
      .then((response) => {
        if (response.data.response == "success") {
          this.setState({ object: response.data });
        }
      });
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <Container>
          <Row>
            <Col md={10} sm={10} xs={10}>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Search Your favourite heros ..."
              />
            </Col>
            <Col md={2} sm={2} xs={2}>
              <button class="search-btn" onClick={this.handleClick}>
                Search
              </button>
            </Col>
          </Row>
          <br />
          {this.state.object.results != undefined ? (
            <Row>
              {this.state.object.results.map((name, index) => (
                <Col md={3} sm={6} xs={12}>
                  <Link to={{ pathname: "/dashboard/viewhero", hero: name }}
                  style={{color:"black",textDecoration:"none"}}
                  >
                    <Card className="heroCard">
                      <Card.Img variant="top" src={name.image.url} />
                      <Card.Body>
                        <Card.Title>{name.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          ) : (
            <></>
          )}
        </Container>
      </div>
    );
  }
}
export default heroSearch;
