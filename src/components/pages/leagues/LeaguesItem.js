import React, { Component, Fragment } from "react";
import { Row, Col, Container } from "reactstrap";
import _ from "lodash";
import LeagueCard from "./LeagueCard";

class LeaguesItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { getLeaguesItem, getTeams } = this.props;
    const currentId = this.props.match.params.id;

    getLeaguesItem(currentId);
    getTeams(currentId);
  }
  render() {
    const { leaguesItem, teams } = this.props;
    return (
      <div className="page-body">
        <div className="container">
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <h1>Football Leagues</h1>
              {leaguesItem.loading ? (
                <i className="fas fa-spinner fa-pulse" />
              ) : !_.isEmpty(leaguesItem.payload) ? (
                <Fragment>
                  <h2>{leaguesItem.payload.name}</h2>
                  <div className="cards">
                    <LeagueCard item={leaguesItem.payload} actions={false} />
                  </div>
                </Fragment>
              ) : (
                "NOT FOUND : Note that only available ID's are (2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021)"
              )}
              <h2>Teams</h2>
              {teams.loading && <i className="fas fa-spinner fa-pulse" />}
              <div className="teams-container">
                <Container>
                  <Row>
                    {teams.payload.count > 0
                      ? teams.payload.teams.map((value, index) => {
                          return (
                            <Col lg={3} md={4} sm={6} xs={6} key={index}>
                              <div className="team-card">
                                <div className="team-img">
                                  {value.crestUrl ? (
                                    <img
                                      width={80}
                                      src={value.crestUrl}
                                      alt={value.name}
                                    />
                                  ) : (
                                    <i className="fas fa-image" />
                                  )}
                                </div>
                                <p>{value.name}</p>
                              </div>
                            </Col>
                          );
                        })
                      : "no teams"}
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LeaguesItem;
