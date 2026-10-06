function Contato() {
  return (
    <section className="page contact-page">

      <div className="page-header">

        <span className="section-label">
          NOVO REGISTRO
        </span>

        <h1>Encontrou um dragão?</h1>

        <p>
          Envie informações sobre uma nova criatura
          para contribuir com o Livro dos Dragões.
        </p>

      </div>


      <div className="contact-layout">

        <div className="contact-information">

          <h2>Como contribuir</h2>

          <p>
            Encontrou uma espécie que ainda não está
            registrada no catálogo?
          </p>

          <p>
            Envie seu nome, e-mail e conte tudo o que
            conseguiu observar sobre o dragão.
          </p>

          <p>
            Seus registros podem ajudar a ampliar o
            conhecimento sobre as criaturas conhecidas.
          </p>

        </div>


        <form className="contact-form">

          <label>
            Nome

            <input
              type="text"
              placeholder="Digite seu nome"
            />
          </label>


          <label>
            E-mail

            <input
              type="email"
              placeholder="Digite seu e-mail"
            />
          </label>


          <label>
            Registro do dragão

            <textarea
              rows="6"
              placeholder="Descreva o dragão encontrado, suas características, localização e comportamento"
            />
          </label>


          <button type="submit" className="button">
            Enviar registro
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contato;