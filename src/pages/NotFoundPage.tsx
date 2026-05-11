import { NavLink } from "react-router";
import Navigation from "../components/Navigation";

export default function NotFoundPage() {
  return (
    <>
      <Navigation />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "normal" }}>
            Page not found
          </h1>
          <NavLink to={"/"}>
            <button className="outlined">Home</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
