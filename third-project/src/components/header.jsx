import image from '../images/image.png';

function Header(){
    return(
        <header className="header">
            <img className="header__image" src={image} alt="Chef Claude" />
            <h1 className="header__title">Chef Claude</h1>
        </header>
    )
}

export default Header;