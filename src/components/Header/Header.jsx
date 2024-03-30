import StyledHeader from './Header.styled';

import './search.svg';
import './cart.svg';
import './profile.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div className="header__left-part">
        <div className="header__logo">Shoppe</div>
      </div>
      <div className="header__right-part">
        <nav>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Our Story</a></li>
          </ul>
        </nav>
        <div className="header__separator" />
        <div className="header__icons">
          <div><img src="./search.svg" alt="Search" /></div>
          <div><img src="./cart.svg" alt="Cart" /></div>
          <div><img src="./profile.svg" alt="Profile" /></div>
        </div>
      </div>
    </StyledHeader>
  )
};

export default Header;