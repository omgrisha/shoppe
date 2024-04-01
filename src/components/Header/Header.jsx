import StyledHeader, { Icons, Logo, Nav, Separator } from './Header.styled';

import search from './search.svg';
import cart from './cart.svg';
import profile from './profile.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div className="container flex">
        <Logo>Shoppe</Logo>
        <div class="flex">
          <Nav>
            <ul>
              <li><a href="#" className="heading-5">Shop</a></li>
              <li><a href="#" className="heading-5">Blog</a></li>
              <li><a href="#" className="heading-5">Our Story</a></li>
            </ul>
          </Nav>
          <Separator />
          <Icons className="flex">
            <li>
              <a href="#">
                <img src={search} alt="Search" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={cart} alt="Cart" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={profile} alt="Profile" />
              </a>
            </li>
          </Icons>
        </div>
      </div>
    </StyledHeader>
  )
};

export default Header;