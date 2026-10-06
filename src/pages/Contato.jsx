function Contato() {
  return (
    <section className="page contact-page">

      <div className="page-header">

        <span className="section-label">
          CONTATO
        </span>

        <h1>Vamos conversar?</h1>

        <p>
          Entre em contato para falar sobre seu próximo projeto.
        </p>

      </div>


      <div className="contact-layout">

        <div className="contact-information">

          <h2>Informações</h2>

          <p>
            São Paulo, Brasil
          </p>

          <p>
            joao.pagano@aluno.cps.sp.gov.br
          </p>

          <p>
            +55 (11) 94702-4469
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
            Mensagem

            <textarea
              rows="6"
              placeholder="Digite sua mensagem"
            />
          </label>


          <button type="submit" className="button">
            Enviar mensagem
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contato;