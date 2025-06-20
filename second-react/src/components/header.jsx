import globe from '../images/globe.png';

function Header(){
    return(
        <header className="header">
            <img src={globe} alt="logo" className="header__logo" />
            <h1 className="header__title">My Travel Journal</h1>
        </header>
    )
}
export default Header;