import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formular = (props) => {
  const { obedit, transmit, editez } = props;
  const [id, setId] = useState([obedit.id]);
  const [nume, setNume] = useState([obedit.nume]);
  const [prenume, setPrenume] = useState([obedit.prenume]);
  const [marca, setMarca] = useState([obedit.marca]);
  const [descriere, setDescriere] = useState([obedit.descriere]);

  const stil = {
    h2: { textAlign: "center" },
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const adauga = { nume, prenume, marca, descriere };
    props.transmit(adauga);
    setId("");
    setNume("");
    setPrenume("");
    setMarca("");
    setDescriere("");
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        {id > 0 ? "Modifica inchiriere" : "Inchiriere noua"}
      </h2>
      <hr />
      <Form
        onSubmit={tratezSubmit}
        style={{
          backgroundColor: "whitesmoke",
        }}
      >
        <Form.Group>
          <Form.Label>Nume:</Form.Label>
          <Form.Control
            type="text"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Prenume:</Form.Label>
          <Form.Control
            type="text"
            value={prenume}
            onChange={(e) => setPrenume(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Model masina:</Form.Label>
          <Form.Control
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Descriere:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-4"
          onClick={() => console.log("salut")}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formular;
