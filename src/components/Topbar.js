// @flow
import React, { Component } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        openMenu: !prevState.openMenu
      };
    });
  };

  render() {
    const { user } = this.props;
    const { openMenu } = this.state;
    return (
      <header className={"topBar "}>
        <div className={"btn nav-link userActions"}>
          <div className="notification">
            <a href="" className={"btnNotification"} >
              <i className="far fa-bell" color="#9b9b9b" />
            </a>
          </div>

          <Dropdown isOpen={openMenu} toggle={this.toggleMenu}>
            <DropdownToggle className={"user-dropdown"} caret={false}>
              <span className={"userAvatar"} ><i className="fas fa-user-circle" /></span>
              <span>{user}</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Profile Setting</DropdownItem>
              <DropdownItem header>Accounts</DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>
                <a href="">Log out</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </header>
    );
  }
}

export default Topbar;
