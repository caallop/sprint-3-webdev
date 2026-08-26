import logo from "../img/generico/logo.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar ">
      <div className="nav-container container">
        <img
          src={logo.src}
          alt="Interface of QuoteKit application"
          className="logo"
        />
        <Link href="/login" className="nav-ref">
          Login
        </Link>
        <Link href="/cadastro" className="btn btn-primary">
          Cadastro
        </Link>
      </div>
    </nav>
  );
}
 