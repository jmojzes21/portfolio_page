import "./Greeting.scss";

export default function Greeting() {
  return (
    <div className="greeting-container">
      <div className="greeting">
        <div className="greeting-fullname">Josip Mojzeš</div>
        <div>
          <div className="greeting-description">
            Information and Software Engineering student
          </div>
        </div>
      </div>
    </div>
  );
}
