import Declarative_photo from "./../images/icon1.png";
import Components_photo from "./../images/icon2.png";
import Single_way_photo from "./../images/icon3.png";
import JSX_photo from "./../images/icon4.png";

function Assets() {
  return (
    <div className="assets">
      <div className="components">
        <img src={Declarative_photo} alt="Declarative" />
        <h4>Declarative</h4>
        <p className="paragraph">
          React makes it painless to create interactive UIs.
        </p>
      </div>

      <div className="components">
        <img src={Components_photo} alt="Components" />
        <h4>Components</h4>
        <p className="paragraph">
          Build encapsulated components that manage their state.{" "}
        </p>
      </div>

      <div className="components">
        <img src={Single_way_photo} alt="single-way" />
        <h4>Single-Way</h4>
        <p className="paragraph">
          A ser of immutable values are passed to the component's.
        </p>
      </div>

      <div className="components">
        <img src={JSX_photo} alt="JSX" />
        <h4>JSX</h4>
        <p className="paragraph">
          Statically-typed, designed to run on modern browsers
        </p>
      </div>
    </div>
  );
}

export default Assets;
