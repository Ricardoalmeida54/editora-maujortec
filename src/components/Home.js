import React from "react";
import { Link } from "react-router-dom";

// METODO FILTER APLICA AO UM ARRAY DE DAOS RECEBIDOS SEPARA (FILTRA) 
//E MONTA UM ARRAY COM OS SEIS  PRIMEIROS LIVROS DO BANCO DE DADOS //
//ESTAMOS ASSUMINDO QUE OS LIVROS MAIS RECENTES (ULTIMOS LANÇAMENTOS) //
// SÃO OS SEIS PRIMEIROS NO OBJETO JSON EM SUAS EXPERIÊNCIAS, ALTERE O //
// NÚMERO SEIS NESSA LINHA E OBSERVE O RESULTADO //

// O OBJETO {livros} PASSADO DO COMPONENTE APP, CONFORME EXPLICADO ANTERIORMENTE É RECEBIDO COMO PROPS//
//PELO COMPONENTE HOME ASSIM ESSE COMPONENTE TEM ACESSO AOS DADOS VINDO DA API E PODE MANIPULA-LOS E GERAR//
//CONTEÚDO DINÂMICO PARA A HOME PAGE VER COMENTARIO

// O METODO MAP() É APLICADO AO OBJETO DE DAODS DOS SEIS LIVROS E GERA A MARCAÇÃO HTML PARA A PAGINA HOME//

// EM REACT, PARA RODA LISTA GERADA DINAMICAMENTE É MANDATÓRIO QUE OS ITENS DA LISTA RECEBAM O ATRIBUTO.KEY//
//CUJO VALOR DEVE SER ÚNICO (UM VALOR DIFERENTE PARA CADA ITEM). NO NOSSO EXEMPLO, OS ITENS DA LISTA SÃO OS ELEMENTOS//
//DIV.CARD QUE RECEBERAM O MESMO ID DO LIVRO, PORÉM PODERIA TER SIDO O SLUG DO LIVRO, MAS NÃO PODERIA TER//
//SIDO O PREÇO DO LIVRO, PORQUE PODE HAVER MAIS DE UM LIVRO COM O MESMO PREÇO.

//AQUI É GERADA A MARCAÇÃO HTML DA IMAGEM DA CAPA DO LIVRO. O NOME DO ARQUIVO DE CADA CAPA É O SEU ISBN SEM OS TRACINHOS SEPARADORES//
//MAIS A EXTENSÃO .JPG. O METODO REPLACE() É USADO PARA RETIRAR OS TRACINHOS SEPARADORES DO ISBN E A SEGUIR INSERE//
//A EXTENSÃO.JPG

//O MÉTODO FILTER() CRIA UM ARRAY DE SLUGS DOS LIVROS.//
//OBS MAPEAMOS UM ARRAY FILTRADO PELO ARRAY//

//SLICE RETORNA UMA DESCRIÇÃO RESUMIDA



const Home = ({ livros }) => (
  <main className="principal">
    <h2>Últimos lançamentos</h2>
    {livros
    .filter((n, index) => index < 28)
    .map(livro => (
      <div className="card" key={livro.id}>
        <div className="thumb">
        <img
              src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
              alt="Thumbnail da capa do livro ..."
            />
          </div>
          {livros
          .filter(c => c.slug === livro.slug)
          .map(livro => (
            <Link to={`/livro/${livro.slug}`} key={livro.id}>
              {
                <div className="detalhes">
                  <h3>{livro.titulo}</h3>
                  <p>{livro.descricao.slice(0, 130) + "..."}</p>
                  <p>Leia mais &gt;</p>
                </div>
              }
            </Link>
          ))}
      </div>
    ))}
  </main>
);

export default Home;
