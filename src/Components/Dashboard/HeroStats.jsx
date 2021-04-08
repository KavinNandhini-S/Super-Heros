import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//charts
import ChartistGraph from "react-chartist";
import Chartist from "chartist";
import lineGraph from "../variables/chart"

class HeroStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [1,2,3],
        series: [3,2,1],
      },
      options: {
        axisX: {
          showGrid: false,
        },
        low: 0,
        high: 5,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0,
        },
      },
      animation: {
        draw: function(data) {
          
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          
        }
      }
      
    };
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={6} sm={12} xs={12}>
              <ChartistGraph
                className="ct-chart"
                data={this.state.data}
                type="Line"
                options={this.state.options}
                listener={lineGraph.animation}
                style={{ backgroundColor: "green" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default HeroStats;
