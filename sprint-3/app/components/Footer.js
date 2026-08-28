import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-box ">
      <div className="footer-sub-box ">
        <div className="container">
          <div id="contato">
            <Link href="#" className="fi">
              <img src="/icon/instagram.svg" alt="Instagram" />
            </Link>
            <Link href="#" className="fi">
              <img src="/icon/github.svg" alt="GitHub" />
            </Link>
            <Link href="#" className="fi">
              <img src="/icon/twitter.svg" alt="Twitter" />
            </Link>
            <Link href="#" className="fi">
              <img src="/icon/youtube.svg" alt="YouTube" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
