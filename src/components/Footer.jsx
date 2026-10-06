import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Berk</h2>
          <p>
            Arquitetura, espaços e experiências.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>

          <Link to="/">Início</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>

          <p>São Paulo, Brasil</p>
          <p>joao.pagano@aluno.cps.sp.gov.br</p>
          <p>+55 (11) 94702-4469</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Berk. Todos os direitos reservados.</p>
      </div>

    </footer>
  );
}

export default Footer;