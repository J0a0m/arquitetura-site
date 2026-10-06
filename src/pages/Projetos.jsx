import { Link } from "react-router-dom";

const projetos = [
  {
    id: 1,
    nome: "Fúria da Noite",
    categoria: "Classe Rastreadores",
    imagem: "/images/furia_da_noite.png",
    descricao:
      "Uma das espécies mais raras de dragão, conhecida por sua velocidade, inteligência e capacidade de desaparecer durante a noite.",
  },
  {
    id: 2,
    nome: "Nadder Mortal",
    categoria: "Classe Afiados",
    imagem: "/images/nadder_mortal.png",
    descricao:
      "Um dragão ágil e perigoso, reconhecido por suas escamas resistentes, grande velocidade e espinhos venenosos.",
  },
  {
    id: 3,
    nome: "Pesadelo Monstruoso",
    categoria: "Classe Fogo",
    imagem: "/images/pesadelo_monstruoso.png",
    descricao:
      "Um dragão poderoso e agressivo, capaz de utilizar seu próprio corpo em chamas para atacar e intimidar seus inimigos.",
  },
];

function Projetos() {
  return (
    <section className="page projects-page">

      <div className="page-header">

        <span className="section-label">
          CATÁLOGO DE DRAGÕES
        </span>

        <h1>Dragões</h1>

        <p>
          Conheça algumas das espécies registradas
          no Livro dos Dragões e descubra suas
          características, habilidades e comportamentos.
        </p>

      </div>


      <div className="projects-list">

        {projetos.map((projeto) => (
          <article
            className="project-list-item"
            key={projeto.id}
          >

        
            <div className="project-image">
              <img
                className="image-placeholder"
                src={projeto.imagem}
                alt={projeto.nome}
              />
            </div>

            <div className="project-list-content">

              <span>
                {String(projeto.id).padStart(2, "0")} —{" "}
                {projeto.categoria}
              </span>

              <h2>{projeto.nome}</h2>

              <p>
                {projeto.descricao}
              </p>

              <Link
                to={`/projetos/${projeto.id}`}
                className="text-link"
              >
                Ver registro →
              </Link>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projetos;