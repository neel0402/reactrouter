import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import "./index.css";
import { NavLink } from "react-router-dom";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navDiv">
      <Navbar expand="lg">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="Linktag d-flex gap-2" navbar>
            <NavItem>
              <NavLink to={""}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/Service"}>Service</NavLink>
            </NavItem>
            <br />
            <NavItem>
              <NavLink to={"/Contact"}>ContactUs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/product"}>Product</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
