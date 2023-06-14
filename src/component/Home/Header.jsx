import Nav from "./Nav";
import "../../assets/css/Header.css";
function Header({logo, alt}) {
  return (
    <header>
      <div className="head">
        <div>
          <img src={logo} alt={alt} />
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
