import "./styles.css";

function Header() {
  return (
    <header className="header">
      <h1>
        <a href="#">
          <img
            // test image from 'src' folder, to stop error messages
            src="../../../assets/images/logo.png"
            alt=""
            className="header-logo"
          />
        </a>
      </h1>
      <div>
        <h2 className="header-title fs-2">AI Fiction hub</h2>
        <p>Tales from Artificial Intelligence</p>
      </div>
    </header>
  );
}

export default Header;
