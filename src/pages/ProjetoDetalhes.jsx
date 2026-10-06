import { Link, useParams } from "react-router-dom";

const projetos = {
  1: {
    nome: "Fúria da Noite",
    categoria: "Classe Rastreadores",
    ano: "Registro 01",
    local: "Ilha de Berk",
    imagem: "/images/furia_da_noite_livro.jpg",
    imagem2: "/images/furia_da_noite_banner1.png",
    imagem3: "/images/furia_da_noite_banner2.jpg",
    descricao:
      "A Fúria da Noite é uma das espécies mais raras e misteriosas de dragão conhecidas pelos habitantes de Berk. É reconhecida por sua velocidade impressionante, inteligência e grande capacidade de voo, sendo capaz de realizar movimentos rápidos e precisos mesmo durante a noite. Sua coloração escura permite que se misture facilmente com o ambiente, tornando sua presença difícil de perceber. Além disso, possui uma excelente visão noturna e grande capacidade de aprendizado, características que fazem dessa espécie uma das mais habilidosas e difíceis de encontrar. Apesar de sua aparência ameaçadora, a Fúria da Noite demonstra ser uma criatura extremamente inteligente e capaz de criar fortes vínculos de confiança.",
  },

  2: {
    nome: "Nadder Mortal",
    categoria: "Classe Afiados",
    ano: "Registro 02",
    local: "Ilha de Berk",
    imagem: "/images/nadder_mortal_livro.png",
    imagem2: "/images/nadder_mortal_banner1.jpg",
    imagem3: "/images/nadder_mortal_banner2.jpeg",
    descricao:
      "O Nadder Mortal é um dragão ágil, veloz e perigoso, facilmente reconhecido por suas escamas resistentes e pelos diversos espinhos que cobrem seu corpo. Esses espinhos são uma de suas principais formas de defesa e podem ser utilizados contra possíveis ameaças. A espécie também possui grande habilidade de voo, conseguindo realizar movimentos rápidos e mudanças de direção com facilidade. Seu comportamento pode ser bastante agressivo quando se sente ameaçado, mas o Nadder Mortal também demonstra inteligência e capacidade de adaptação. Sua combinação de velocidade, força e características defensivas faz dele um dos dragões mais preparados para enfrentar situações de perigo.",
  },

  3: {
    nome: "Pesadelo Monstruoso",
    categoria: "Classe Fogo",
    ano: "Registro 03",
    local: "Ilha de Berk",
    imagem: "/images/pesadelo_monstruoso_livro.png",
    imagem2: "/images/pesadelo_monstruoso_banner1.png",
    imagem3: "/images/pesadelo_monstruoso_banner2.png",
    descricao:
      "O Pesadelo Monstruoso é um dragão forte, resistente e conhecido por seu comportamento agressivo. Sua principal característica é a capacidade de envolver o próprio corpo em chamas, utilizando o fogo tanto para atacar quanto para se defender. Essa habilidade torna a espécie especialmente perigosa durante confrontos e permite que ela afaste ameaças com facilidade. Possui um corpo robusto e grande resistência física, sendo capaz de suportar situações que poderiam ser difíceis para outras espécies. Apesar de sua aparência intimidadora, o Pesadelo Monstruoso também apresenta inteligência e capacidade de desenvolver estratégias durante os combates, tornando-o um dos dragões mais impressionantes registrados no Livro dos Dragões.",
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