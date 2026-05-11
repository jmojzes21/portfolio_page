import { NavLink } from "react-router";
import "./Navigation.scss";
import NavigationHelper from "../helpers/NavigationHelper";

export default function Navigation() {
  return (
    <header>
      <span className="name">Josip Mojzeš</span>
      <nav className="margin-left-20">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/#contact"}>Contact</NavLink>
        <NavLink to={"/#skills"}>Skills</NavLink>
        <NavLink to={"/#projects"}>Projects</NavLink>
      </nav>
      <NavigationHelper />
    </header>
  );
}
