import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>
        <Link to={"/home"} className="text-decoration-none">
          <img
            // test image from 'src' folder, to stop error messages
            src="../../../assets/images/logo.png"
            alt=""
            className="header-logo"
          />
        </Link>
      </h1>
      <div>
        <Link to={"/home"} className="text-decoration-none">
          <h2 className="header-title fs-2">AI Fiction hub</h2>
        </Link>
        <p>Tales from Artificial Intelligence</p>
      </div>
    </header>
  );
}

export default Header;
