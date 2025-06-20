function Header(){
  return(
    <header className="header">
      <div className="header--logo">
        <img className="react-logo" src="src/assets/react.svg" alt="React Logo" />
        <h1>ReactFacts</h1>
      </div>
        <nav>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}
export default Header;
