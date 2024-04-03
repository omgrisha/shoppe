import { StyledHeader, Icons, Logo, NavList, Separator } from './Header.styled';

import search from './search.svg';
import cart from './cart.svg';
import profile from './profile.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <div className='container flex'>
        <Logo>Shoppe</Logo>
        <div className='flex'>
          <nav>
            <NavList>
              <li><a href='#' className='heading-5'>Shop</a></li>
              <li><a href='#' className='heading-5'>Blog</a></li>
              <li><a href='#' className='heading-5'>Our Story</a></li>
            </NavList>
          </nav>
          <Separator />
          <Icons className='flex'>
            <li>
              <a href='#'>
                <img src={search} alt='Search' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={cart} alt='Cart' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={profile} alt='Profile' />
              </a>
            </li>
          </Icons>
        </div>
      </div>
    </StyledHeader>
  )
};