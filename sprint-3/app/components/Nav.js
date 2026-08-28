import logo from "../img/generico/logo.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar ">
      <div className="nav-container container">
        <Link href="/#" className="nav-ref">
          <img
            src={logo.src}
            alt="Interface of QuoteKit application"
            className="logo"
          />
        </Link>

        <Link href="/login" className="btn btn-primary">
          Conta
        </Link>
      </div>
    </nav>
  );
}
