/*eslint-disable*/
import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import withus_logo from "img/withus_logo.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={withus_logo}
              width="100"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                홈
              </Nav.Link>
              <Nav.Link as={Link} to={"/Major"}>
                학과별
              </Nav.Link>
              <Nav.Link as={Link} to={"/Free"}>
                자유
              </Nav.Link>
              <Nav.Link as={Link} to={"/Theme"}>
                테마
              </Nav.Link>
              <Nav.Link as={Link} to={"/Ask"}>
                고민
              </Nav.Link>
              <Nav.Link as={Link} to={"/Survey"}>
                설문
              </Nav.Link>
              <Nav.Link as={Link} to={"/Info"}>
                정보
              </Nav.Link>
              <Nav.Link as={Link} to={"/Promote"}>
                홍보
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
