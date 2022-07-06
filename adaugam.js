import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const Adauga = (props) => {
  const { nume, prenume, marca, descriere, sterge, editeaza, id } = props;
  const stil = {
    svg: {
      pointerEvents: "none",
    },
  };

  return (
    <Container
      style={{
        backgroundColor: "whitesmoke",
      }}
    >
      <h4>
        {nume} {prenume}
      </h4>
      <Row>
        <Col sm={9}>
          <h6>Model masina: {marca}</h6>
        </Col>
        <Col sm={3}>
          <Button
            variant="link"
            onClick={() => editeaza(id)}
            id={id}
            style={stil}
          >
            <BsPencilSquare />
          </Button>
          <Button
            variant="link"
            onClick={() => sterge(id)}
            id={id}
            style={stil}
          >
            <BsTrashFill />
          </Button>
        </Col>
      </Row>
      <p>{descriere}</p>
      <hr />
    </Container>
  );
};

export default Adauga;
