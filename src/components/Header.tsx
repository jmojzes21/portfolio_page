import { Link } from "react-router";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <span className="header-name">Josip Mojzeš</span>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/#contact"}>Contact</Link>
        <Link to={"/#skills"}>Skills</Link>
        <Link to={"/#projects"}>Projects</Link>
      </nav>
    </header>
  );
}
