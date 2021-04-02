import React from "react";
import { useParams } from "react-router";

const Editar = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Editar</h1>
      {id}
    </div>
  );
};

export default Editar;
