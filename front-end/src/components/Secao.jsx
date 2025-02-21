import React from "react";

const Secao = ({ titulo, children }) => {
  return (
    <div className="secao">
      <h2>{titulo}</h2>
      <div className="conteudo">{children}</div>
    </div>
  );
};

export default Secao;