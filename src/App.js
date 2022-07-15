import React, { useState, useEffect } from "react";
import "./style.css";
import image from "./components/LOGO.jpg";
import Formular from "./formular";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Disponibile from "./components/disponibile";
import Program from "./program";

export default function App() {
  const [lista, setLista] = useState([]);
  const [modif, setModif] = useState(false);
  const [edit, setEdit] = useState({
    id: 0,
    ora: "",
    titlu: "",
    loc: "",
    descriere: "",
  });

  useEffect(() => {
    fetch("http://localhost:80/masini/masini.php")
      .then((rezultat) => rezultat.text())
      .then((listae) => setLista(JSON.parse(listae)));
  }, [modif]);
  const stergActiv = (id) => {
    const dateScript = JSON.stringify({ id: parseInt(id, 10) });
    const config = {
      mode: "no-cors",
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };

    fetch("http://localhost:80/masini/masini.php", config).then(() => {
      setModif(!modif);
    });
  };

  const adaugaActiv = (elm) => {
    //elm.dcalend = new Date().toJSON().slice(0, 10);
    const dateScript = JSON.stringify(elm);
    const config = {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };

    fetch("http://localhost:80/masini/masini.php", config).then(() => {
      setModif(!modif);
    });
  };
  const editActiv = (elm) => {
    // elm.dcalend = new Date().toJSON().slice(0, 10);
    const dateScript = JSON.stringify(elm);
    const config = {
      mode: "no-cors",
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: dateScript,
    };

    fetch("http://localhost:80/masini/masini.php", config).then(() => {
      setModif(!modif);
    });

    setEdit({
      id: 0,
      ora: "",
      titlu: "",
      loc: "",
      descriere: "",
    });
  };

  const editeazaActiv = (id) => {
    var obiect = lista.find((item) => {
      return parseInt(item.id, 10) === parseInt(id, 10);
    });
    if (obiect) {
      setEdit({
        id: obiect.id,
        nume: obiect.nume,
        prenume: obiect.prenume,
        marca: obiect.marca,
        descriere: obiect.descriere,
      });
    }
  };

  return (
    <>
      <div className="App">
        <Navbar
          bg="info"
          variant="dark"
          sticky="top"
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Brand>
            <div class="mx-auto">
              <img
                src={image}
                width="50px"
                height="50px"
                class="rounded-circle"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Lista masini">
                <div class="shadow-lg p-1 mb-3 bg-body rounded">
                  <NavDropdown.Item as={Link} to={"/program"}>
                    {" "}
                    Inchiriate
                  </NavDropdown.Item>
                </div>
                <div class="shadow-lg p-1 mb-3 bg-body rounded">
                  <NavDropdown.Item as={Link} to={"components/disponibile"}>
                    {" "}
                    Disponibile
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <Nav.Link as={Link} to={"components/about"}>
                {" "}
                Despre noi
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="content">
        <Container>
          <Routes>
            <Route
              path="/program"
              element={
                <Program
                  adaugam={lista}
                  sterge={stergActiv}
                  editeaza={editeazaActiv}
                />
              }
            />
            <Route path="components/disponibile" element={<Disponibile />} />
            <Route
              path="formular"
              element={
                <Formular
                  transmit={adaugaActiv}
                  obedit={edit}
                  editez={editActiv}
                />
              }
            />
            <Route
              path="/"
              element={<h1 className="text-center"> Bun venit!</h1>}
            />
          </Routes>
        </Container>
      </div>
    </>
  );
}
