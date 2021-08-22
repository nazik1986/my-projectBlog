import React from "react";
import cardArray from "./Components/Cards/CardArray";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

export const Gallery = () => {
  const [items, setItems] = useState(cardArray);
  const cardItems = cardArray.map((todo) => <li key={todo.id}>{todo.text}</li>);
  const filterItem = (categItem) => {
    const updatedItems = cardArray.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">Foto</h1>
      <hr />
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <Button
            className="btn btn-warning"
            onClick={() => filterItem("portret")}
          >
            Portret
          </Button>
          <Button
            className="btn btn-warning"
            onClick={() => filterItem("nature")}
          >
            Nature
          </Button>
          <Button
            className="btn btn-warning"
            onClick={() => filterItem("family")}
          >
            Family
          </Button>
          <Button
            className="btn btn-warning"
            onClick={() => setItems(cardArray)}
          >
            All
          </Button>
        </div>
      </div>
      {items.map((elem) => {
        const { id, name, category, image } = elem;
        return (
          <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <Row xs={1} md={4} className="g-4">
              {Array.from({ length: 3 }).map((id) => (
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Button onClick={() => filterItem(category)}>
                        {" "}
                        Category:{category}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        );
      })}
    </>
  );
};
