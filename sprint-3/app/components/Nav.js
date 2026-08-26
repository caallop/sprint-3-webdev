import logo from "../img/generico/logo.svg";


export default function Navbar() {
  return (
    <nav className="navbar ">
      <div className="nav-container container">
        <img
          src={logo.src}
          alt="Interface of QuoteKit application"
          className="logo"
        />
        <a href="#" className="nav-ref  ">
          BOTAO 1
        </a>
        <a href="#" className="btn btn-primary">
          BOTAO 2
        </a>
      </div>
    </nav>
  );
}
