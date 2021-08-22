import React, { useState } from "react";
import { Nav, Navbar, Button, Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
  .mr-2 {
    color: black;
    &:hover {
      color: white;
      background-color: red;
    }
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    height: 100%;
  }
`;

export default function NaviBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>V-STUDIO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ justifyContent: "space-between" }}
            >
              <Nav
                className="mr-auto"
                style={{ justifyContent: "space-between" }}
              >
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/gallery">Gallery</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Button
                  variant="outline-primary"
                  onClick={handleShow}
                  style={{ margin: "5px" }}
                >
                  Log In
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={handleShow}
                  style={{ margin: "5px" }}
                >
                  Sign Out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remeber me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
