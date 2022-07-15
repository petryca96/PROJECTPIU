import React from "react";
import Adauga from "./adaugam";

const Program = (props) => {
  const { adaugam, sterge, editeaza } = props;
  const lista = (adaugam || []).map((act) => {
    return (
      <Adauga
        id={act.id}
        nume={act.nume}
        marca={act.marca}
        prenume={act.prenume}
        descriere={act.descriere}
        sterge={sterge}
        editeaza={editeaza}
      />
    );
  });

  const stil = {
    h2: { textAlign: "center" },
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Lista masini inchiriate
      </h2>
      <hr />
      <div>{lista}</div>
    </>
  );
};

export default Program;
