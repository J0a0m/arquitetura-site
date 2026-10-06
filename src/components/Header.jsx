import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          BERK
        </Link>

        <nav className="navigation">
          <Link to="/">Início</Link>
          <Link to="/projetos">Dragões</Link>
          <Link to="/sobre">Sobre o Livro</Link>
          <Link to="/contato">Novo Registro</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;