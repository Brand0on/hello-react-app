import ironhack_logo from "./../images/ironhack-logo-xs.png";
import menu_top from "./../images/menu-top-xs.png";

function Photos() {
  return (
    <div className="NavBar">
      <img src={ironhack_logo} alt="Ironhack logo" />
      <img src={menu_top} alt="Menu logo" />
    </div>
  );
}

export default Photos;
