import { Link, useParams } from "react-router-dom";

const projetos = {
  1: {
    nome: "Fúria da Noite",
    categoria: "Classe Rastreadores",
    ano: "Registro 01",
    local: "Ilha de Berk",
    imagem: "/images/furia_da_noite.png",
    imagem2: "/images/furia_da_noite.png",
    imagem3: "/images/furia_da_noite.png",
    descricao:
      "A Fúria da Noite é uma das espécies mais raras de dragão conhecidas. É reconhecida por sua velocidade, inteligência, visão noturna e capacidade de voar em grande velocidade.",
  },

  2: {
    nome: "Nadder Mortal",
    categoria: "Classe Afiados",
    ano: "Registro 02",
    local: "Ilha de Berk",
    imagem: "/images/nadder_mortal.png",
    imagem2: "/images/nadder_mortal.png",
    imagem3: "/images/nadder_mortal.png",
    descricao:
      "O Nadder Mortal é um dragão ágil e perigoso. Possui escamas resistentes, excelente capacidade de voo e diversos espinhos venenosos espalhados pelo corpo.",
  },

  3: {
    nome: "Pesadelo Monstruoso",
    categoria: "Classe Fogo",
    ano: "Registro 03",
    local: "Ilha de Berk",
    imagem: "/images/pesadelo_monstruoso.png",
    imagem2: "/images/pesadelo_monstruoso.png",
    imagem3: "/images/pesadelo_monstruoso.png",
    descricao:
      "O Pesadelo Monstruoso é um dragão forte e agressivo. Sua principal característica é a capacidade de envolver o próprio corpo em chamas para atacar e se defender.",
  },
};

function ProjetoDetalhes() {
  const { id } = useParams();

  const projeto = projetos[id];

  if (!projeto) {
    return (
      <section className="page not-found">
        <h1>Dragão não encontrado</h1>

        <Link to="/projetos" className="button">
          Voltar para o catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail">

      <div className="project-detail-header">

        <span className="section-label">
          {projeto.categoria}
        </span>

        <h1>{projeto.nome}</h1>

        <div className="project-meta">
          <span>Local: {projeto.local}</span>
          <span>{projeto.ano}</span>
        </div>

      </div>

      <div className="project-detail-image">

        <img
          src={projeto.imagem}
          alt={projeto.nome}
        />

      </div>

      <div className="project-detail-content">

        <div>

          <span className="section-label">
            SOBRE O DRAGÃO
          </span>

          <h2>
            Uma espécie registrada no Livro dos Dragões.
          </h2>

        </div>

        <p>
          {projeto.descricao}
        </p>

      </div>

      <div className="project-detail-gallery">

        <div className="detail-image">

          <img
            src={projeto.imagem2}
            alt={`${projeto.nome} - registro 01`}
          />

        </div>

        <div className="detail-image">

          <img
            src={projeto.imagem3}
            alt={`${projeto.nome} - registro 02`}
          />

        </div>

      </div>

      <Link to="/projetos" className="back-link">
        ← Voltar para o catálogo
      </Link>

    </section>
  );
}

export default ProjetoDetalhes;