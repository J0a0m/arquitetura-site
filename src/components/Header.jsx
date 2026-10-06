import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          Berk
        </Link>

        <nav className="navigation">
          <Link to="/">Início</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;