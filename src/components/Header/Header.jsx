import StyledHeader from './Header.styled';

import search from './search.svg';
import cart from './cart.svg';
import profile from './profile.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div className="header__left-part">
        <div className="header__logo">Shoppe</div>
      </div>
      <div className="header__right-part">
        <nav>
          <ul className="header__nav-list">
            <li><a href="#" className="heading-5">Shop</a></li>
            <li><a href="#" className="heading-5">Blog</a></li>
            <li><a href="#" className="heading-5">Our Story</a></li>
          </ul>
        </nav>
        <div className="header__separator"></div>
        <ul className="header__icons">
          <li>
            <a href="#"><img src={search} alt="Search" /></a>
          </li>
          <li>
            <a href="#"><img src={cart} alt="Cart" /></a>
          </li>
          <li>
            <a href="#"><img src={profile} alt="Profile" /></a>
          </li>
        </ul>
      </div>
    </StyledHeader>
  )
};

export default Header;