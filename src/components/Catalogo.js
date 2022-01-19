import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// O FILTER CRIA UM ARRAY DA CATEGORIA FRONTEND DE LIVROS 
// MAPEAMOS OS LIVROS FILTRADOS PARA A CATEGORIA FRONTEND

const Catalogo = ({ livros }) => {
  return (
  <main className="principal">
    <h2>Categoria frontend</h2>
    <ol>
      {livros
      .filter(livro => livro.categoria === "frontend")
      .map(livro => (
        <li key={livro.id}>
          <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
        </li>
      ))}
    </ol>
    <h2>Categoria programação</h2>
    <ol>
      {livros
      .filter(livro => livro.categoria === "programacao")
      .map(livro => (
        <li key={livro.id}>
          <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
        </li>
      ))}
    </ol>
  </main>
);
};
export default Catalogo;
