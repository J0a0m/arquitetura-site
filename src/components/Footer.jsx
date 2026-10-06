import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2 className="footer-logo">BERK</h2>

            <p className="footer-description">
              O Livro dos Dragões reúne informações sobre as
              espécies conhecidas, seus hábitos, características
              e histórias.
            </p>
          </div>

          <div className="footer-links">

            <div className="footer-column">
              <span>Navegação</span>

              <Link to="/">Início</Link>
              <Link to="/projetos">Dragões</Link>
              <Link to="/sobre">Sobre o Livro</Link>
              <Link to="/contato">Novo Registro</Link>
            </div>

            <div className="footer-column">
              <span>Contato</span>

              <p>São Paulo, Brasil</p>
              <p>joao.pagano@aluno.cps.sp.gov.br</p>
              <p>+55 (11) 94702-4469</p>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Livro dos Dragões. Todos os direitos reservados.</p>

          <p>Registros de Berk</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;