import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <span className="section-label">
            REGISTRO DOS DRAGÕES
          </span>

          <h1>
            Conheça as
            <br />
            criaturas de Berk.
          </h1>

          <p>
            Um registro das espécies de dragões conhecidas,
            seus hábitos, características e histórias.
          </p>

          <Link to="/projetos" className="button">
            Abrir Catálogo
          </Link>

        </div>

        <div className="hero-image">
          <img
            className="image-placeholder"
            src="/images/projeto.jpg"
            alt="Dragão de Berk"
          />
        </div>

      </section>


      <section className="about-preview">

        <div>
          <span className="section-label">
            SOBRE O LIVRO
          </span>

          <h2>
            Conhecimento sobre as criaturas de Berk.
          </h2>
        </div>

        <p>
          Este livro reúne informações sobre diferentes espécies
          de dragões, apresentando suas características, hábitos,
          habilidades e histórias conhecidas pelos habitantes de Berk.
        </p>

      </section>


      <section className="projects-preview">

        <div className="section-heading">

          <div>
            <span className="section-label">
              DRAGÕES CATALOGADOS
            </span>

            <h2>
              Espécies registradas
            </h2>
          </div>

          <Link to="/projetos" className="text-link">
            Ver catálogo →
          </Link>

        </div>


        <div className="project-grid">

          <article className="project-card">
            <div className="project-image">
              <img
                className="image-placeholder"
                 src="/images/furia_da_noite.png"
                 alt="Fúria da Noite"
              />
            </div>

            <div className="project-info">
              <span>01</span>
              <h3>Fúria da Noite</h3>
              <p>
                Uma das espécies mais raras e velozes conhecidas.
              </p>
            </div>
          </article>


          <article className="project-card">
            <div className="project-image">
               <img
                className="image-placeholder"
                src="/images/nadder_mortal.png"
                alt="Nadder Moral"
              />
            </div>

            <div className="project-info">
              <span>02</span>
              <h3>Nadder Mortal</h3>
              <p>
                Dragão ágil conhecido por seus espinhos venenosos.
              </p>
            </div>
          </article>


          <article className="project-card">
            <div className="project-image">
              <img
                className="image-placeholder"
                src="/images/pesadelo_monstruoso.png"
                alt="Pesadelo Monstruoso"
              />
            </div>

            <div className="project-info">
              <span>03</span>
              <h3>Pesadelo Monstruoso</h3>
              <p>
                Um dragão agressivo conhecido por sua força e capacidade de incendiar o próprio corpo.
              </p>
            </div>
          </article>

        </div>

      </section>


      <section className="contact-preview">

        <div>
          <span className="section-label">
            CONTRIBUA COM O REGISTRO
          </span>

          <h2>
            Encontrou um novo
            <br />
            dragão para catalogar?
          </h2>
        </div>

        <Link to="/contato" className="button">
          Enviar Registro
        </Link>

      </section>

    </div>
  );
}

export default Home;