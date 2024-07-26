import '../../styles/header.css'

function Header() {
  return (
    <header className='header'>
          <h1>
            <a href="#"><img src="../../../assets/images/logo.png" alt="" className="header-logo" /></a>
          </h1>
        <div>
          <h2 className='header-title'>AI Fiction hub</h2>
          <p>Tales from Artificial Intelligence</p>
        </div>
    </header>
  )
}

export default Header 