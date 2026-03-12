import logo from '../../icons/logo.svg';
import globe from '../../icons/globe.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="header__buttons">
        <button className="header__btn">Anywhere</button>
        <button className="header__btn">Any week</button>
        <button className="header__btn">Add guests</button>
      </div>
      <div className="header__menu">
        <p className="header__menu-text">Airbnb your home</p>
        <img className="header__menu-icon" src={globe} alt="globeIcon" />
        <div className="header__menu-hamburger"></div>
      </div>
    </header>
  );
};

export default Header;
