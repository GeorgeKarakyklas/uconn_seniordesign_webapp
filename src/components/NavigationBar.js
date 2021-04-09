import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div
`
  .navbar { background-color: #000E2F; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    &:hover { color: #E4002B; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #FFFFFF;
    &:hover { color: #E4002B; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">SCORACLE.BB</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">HOME</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contactUs">CONTACT US</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/docs">DOCUMENTATION</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)