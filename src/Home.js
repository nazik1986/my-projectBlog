import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Slider from "./Components/Slider";
import card1 from "../src/images/v-2.jpg";
import card2 from "../src/images/Chicago-6.jpeg";
import card3 from "../src/images/hrystyna-1.jpg";
import card4 from "../src/images/orest-1.jpg";

export const Home = () => (
  <>
    <Slider />
    <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row>
        <Col style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Halyna Vasylytsia</Card.Title>
              <Card.Text>Philadelphia, Pennsylvania</Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>Solomiya Stelmakh</Card.Title>
              <Card.Text>Chicago, Illinois</Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>Hrystyna Kulyavych</Card.Title>
              <Card.Text>Lviv, Ukraine</Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card4} />
            <Card.Body>
              <Card.Title>Orest Rubel</Card.Title>
              <Card.Text>Sokal, Ukraine</Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);
