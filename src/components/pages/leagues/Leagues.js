import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import LeagueCard from "./LeagueCard";
class Leagues extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCompetitions();
  }
  render() {
    const { competitions } = this.props;
    return (
      <div className="page-body">
        <div className="container">
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <h1>Football Leagues</h1>
              <div className="cards">
                {competitions.loading && (
                  <i className="fas fa-spinner fa-pulse" />
                )}
                {competitions.payload &&
                  competitions.payload.count > 0 &&
                  competitions.payload.competitions.map((item, index) => {
                    return (
                      <LeagueCard item={item} key={index} actions={true}/>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Leagues;
