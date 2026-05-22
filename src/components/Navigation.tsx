import { Link } from "react-router";
import "./Navigation.scss";
import NavigationHelper from "../helpers/NavigationHelper";

export default function Navigation() {
  return (
    <header>
      <span className="navigation-name">Josip Mojzeš</span>
      <nav className="margin-left-20">
        <Link to={"/"}>Home</Link>
        <Link to={"/#contact"}>Contact</Link>
        <Link to={"/#skills"}>Skills</Link>
        <Link to={"/#projects"}>Projects</Link>
      </nav>
      <NavigationHelper />
    </header>
  );
}
