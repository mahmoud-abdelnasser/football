import React, { Component } from "react";

import Topbar from "./Topbar";

class Layout extends Component {
  render() {
    const { noheader } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <main role="main">
            {noheader || <Topbar user={"Mahmoud Abdelnasser"} />}
            <div className={"page-content"}>
              <div className="page-bg" />
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
