import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import "./index.css";
import Livro from "./components/Livro";
import axios from "axios";

// NPM RUN BUILD // CRIA A PÁSTA BUILD NA PASTA DO PROJETO //
// NPM INSTALL -G SERVE // INSTALA UM SERVIDOR LOCAL DE PRODUÇÃO//
// SERVE -S BUILD // RODA O SERVIDOR LOCAL EM LOCAlHOST:5000



// REACT ROUTER TRABALHA COM ROTAS DE PÁGINAÇÃO COM PAGINAS LINKADAS.
//O que é o React Router? O React Router é a biblioteca padrão de roteamento do React. js que mantém a interface do usuário em sincronia com o valor atual da URL acessada.//


// O SWITCH SERVE PARA AGRUPAR OS COMPONENTES DA ROTA QUANDO CRIAMOS UM COMPONENTE PARA
//RENDERIZAR PAGINAS NÃO ENCONTRADAS O SWITCH SE TORNA NECESSÁRIO COMO É O NOSSO CASO O ATRIBUTO PATH SERVE PARA
//SABERMOS QUAL LINK QUE ESTÁ SENDO PASSADO E LIGARMOS COM O COMPONENTE //


class App extends Component {
  state = {
    livros: [],
  };
  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Mensagem de erro</p>"
        );
    }
  }
  render() {
    return (
      <Router>
        <Topo />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home livros={this.state.livros} />}
          />
          <Route
            exact
            path="/frontend"
            render={() => <Frontend livros={this.state.livros} />}
          />
          <Route
            exact
            path="/programacao"
            render={() => <Programacao livros={this.state.livros} />}
          />
          <Route
            exact
            path="/design"
            render={() => <Design livros={this.state.livros} />}
          />
          <Route
            exact
            path="/catalogo"
            render={() => <Catalogo livros={this.state.livros} />}
          />
          <Route
            path="/livro/:livroSlug"
            render={(props) => {
              const livro = this.state.livros.find(
                (livro) => livro.slug === props.match.params.livroSlug
              );
              if (livro) return <Livro livro={livro} />;
              else return <NotFound />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Rodape />
      </Router>
    );
  }
}

export default App;
