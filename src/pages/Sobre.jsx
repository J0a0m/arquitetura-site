function Sobre() {
  return (
    <section className="page about-page">

      <div className="page-header">

        <span className="section-label">
          SOBRE O LIVRO
        </span>

        <h1>O Livro dos Dragões</h1>

        <p>
          Conheça a história por trás dos registros e
          o conhecimento reunido sobre as criaturas de Berk.
        </p>

      </div>


      <div className="about-content">

        <div className="about-image">
         <img
                className="about-image"
                src="/images/livro_dos_dragoes.png"
                alt="Pesadelo Monstruoso"
        />
        </div>

        <div className="about-text">

          <span className="section-label">
            NOSSA MISSÃO
          </span>

          <h2>
            Conhecer para compreender.
          </h2>

          <p>
            O Livro dos Dragões reúne informações sobre
            diferentes espécies conhecidas pelos habitantes
            de Berk. Cada registro apresenta características,
            habilidades, comportamentos e outros detalhes
            importantes sobre essas criaturas.
          </p>

          <p>
            O objetivo deste catálogo é organizar esse
            conhecimento de forma simples e acessível,
            permitindo que cada espécie seja conhecida
            e compreendida além de sua aparência.
          </p>

        </div>

      </div>


      <div className="about-block">

        <span className="section-label">
          REGISTROS DE BERK
        </span>

        <h2>
          Um catálogo em constante descoberta.
        </h2>

        <p>
          Novas espécies podem ser encontradas durante as
          explorações pelas ilhas. Por isso, o Livro dos
          Dragões permanece aberto para novos registros,
          descobertas e informações sobre essas criaturas.
        </p>

      </div>

    </section>
  );
}

export default Sobre;