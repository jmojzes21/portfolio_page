import { NavLink } from "react-router";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />

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
