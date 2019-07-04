import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class LeagueCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item, actions } = this.props;
    return (
      <div className="card" >
        <div className="card-img">
          {item.emblemUrl ? (
            <img src={item.emblemUrl} alt={item.name} />
          ) : (
            <i className="fas fa-image" />
          )}
        </div>
        <div className="card-content">
          <p>
            <b>{"Name: "}</b>
            {item.name}
          </p>
          <p>
            <b>{"Area Name: "}</b>
            {item.area.name}
          </p>
          <p>
            <b>{"number of Games: "}</b>
            {item.numberOfAvailableSeasons}
          </p>
        </div>
        {actions && (
          <div className="card-actions">
            <Link to={`/leagues/${item.id}`}> Details</Link>
          </div>
        )}
      </div>
    );
  }
}

export default LeagueCard;
